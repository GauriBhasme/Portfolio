/* Contact form -> EmailJS (existing integration preserved).
   The EmailJS public key is designed to be public; no private secret is used here. */
(function () {
  const EMAILJS = {
    publicKey: "m_c-kH3AQ-44sNSaL",
    service: "service_engwwwe",
    template: "template_l14jfgk",
  };
  const COOLDOWN_MS = 30000;

  const form = document.getElementById("contactForm"),
    btn = document.getElementById("sendBtn"),
    status = document.getElementById("formStatus");
  const label = btn.querySelector(".send-label");
  const fields = {
    from_name: {
      input: form.elements.from_name,
      err: document.getElementById("e-name"),
      check: (v) =>
        v.trim().length >= 2 || "Enter your name (at least 2 characters).",
    },
    reply_to: {
      input: form.elements.reply_to,
      err: document.getElementById("e-email"),
      check: (v) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ||
        "Enter a valid email address, like name@example.com.",
    },
    message: {
      input: form.elements.message,
      err: document.getElementById("e-msg"),
      check: (v) =>
        v.trim().length >= 10 ||
        "Write at least 10 characters so I know how to help.",
    },
  };
  let sending = false;

  const setStatus = (msg, kind) => {
    status.textContent = msg;
    status.className = `form-status ${kind || ""}`;
  };
  function validateField(f) {
    const r = f.check(f.input.value),
      ok = r === true;
    f.input.closest(".field").classList.toggle("invalid", !ok);
    f.input.setAttribute("aria-invalid", String(!ok));
    f.err.textContent = ok ? "" : r;
    return ok;
  }
  Object.values(fields).forEach((f) => {
    f.input.addEventListener("blur", () => validateField(f));
    f.input.addEventListener("input", () => {
      if (f.input.closest(".field").classList.contains("invalid"))
        validateField(f);
    });
  });

  const lastSent = () => {
    try {
      return +localStorage.getItem("contactLastSent") || 0;
    } catch (e) {
      return 0;
    }
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (sending) return; // blocks duplicate submits
    if (form.elements.website.value) return; // honeypot: bots fill hidden field
    const bad = Object.values(fields).filter((f) => !validateField(f));
    if (bad.length) {
      bad[0].input.focus();
      setStatus("Fix the highlighted fields and try again.", "err");
      return;
    }
    const wait = COOLDOWN_MS - (Date.now() - lastSent());
    if (wait > 0) {
      setStatus(
        `Message already sent. You can send another in ${Math.ceil(wait / 1000)} seconds.`,
        "err",
      );
      return;
    }
    if (!window.emailjs) {
      setStatus(
        "The email service could not load. Please use the email address below.",
        "err",
      );
      return;
    }

    sending = true;
    btn.disabled = true;
    btn.classList.add("loading");
    label.textContent = "Sending…";
    setStatus("");
    try {
      emailjs.init({ publicKey: EMAILJS.publicKey });
      const res = await emailjs.sendForm(
        EMAILJS.service,
        EMAILJS.template,
        form,
      );
      if (res.status !== 200) throw res; // success only on confirmed 200
      try {
        localStorage.setItem("contactLastSent", String(Date.now()));
      } catch (er) {}
      form.reset();
      form.querySelector('input[name="inquiry_type"]').checked = true;
      Object.values(fields).forEach((f) =>
        f.input.removeAttribute("aria-invalid"),
      );
      setStatus(
        "Message sent. Thanks for reaching out; I'll reply by email.",
        "ok",
      );
    } catch (err) {
      console.error("Contact form failed:", err && err.status, err && err.text); // never log message content
      const limited = err && err.status === 429;
      setStatus(
        limited
          ? "Too many messages right now. Please try again in a few minutes or email me directly."
          : "Message not sent. Check your connection and try again, or email me directly.",
        "err",
      );
    } finally {
      sending = false;
      btn.disabled = false;
      btn.classList.remove("loading");
      label.textContent = "Send message";
    }
  });
})();
