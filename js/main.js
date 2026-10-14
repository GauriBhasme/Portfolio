/* Behaviour: theme, navigation, reveal, typing, counters, pointer effects. */
document.documentElement.classList.add("js");
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const finePointer = window.matchMedia(
  "(hover:hover) and (pointer:fine)",
).matches;

/* ---- theme (dark default; "light" is stored) ---- */
(function theme() {
  const root = document.documentElement,
    btn = document.getElementById("theme-toggle"),
    ic = document.getElementById("theme-icon");
  const sync = () => {
    const light = root.classList.contains("light-theme");
    ic.className = light ? "fa-solid fa-moon" : "fa-solid fa-sun";
    btn.setAttribute(
      "aria-label",
      light ? "Switch to dark theme" : "Switch to light theme",
    );
  };
  btn.addEventListener("click", () => {
    root.classList.toggle("light-theme");
    try {
      localStorage.setItem(
        "theme",
        root.classList.contains("light-theme") ? "light" : "dark",
      );
    } catch (e) {}
    sync();
  });
  sync();
})();

/* ---- navigation ---- */
(function nav() {
  const header = document.getElementById("navbar"),
    menu = document.getElementById("navMenu"),
    toggle = document.getElementById("menuToggle");
  const setOpen = (open) => {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.firstElementChild.className = open
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
  };
  toggle.addEventListener("click", () =>
    setOpen(!menu.classList.contains("open")),
  );
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  const bar = document.getElementById("scrollProgress");
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    header.classList.toggle("scrolled", scrollY > 8);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Active link = section crossing the middle band of the viewport.
  const links = [...menu.querySelectorAll("a")];
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting)
          links.forEach((l) =>
            l.classList.toggle(
              "active",
              l.getAttribute("href") === `#${en.target.id}`,
            ),
          );
      }),
    { rootMargin: "-45% 0px -50% 0px" },
  );
  links.forEach((l) => {
    const s = document.querySelector(l.getAttribute("href"));
    if (s) io.observe(s);
  });
})();

/* ---- everything that depends on rendered content ---- */
document.addEventListener("portfolio:rendered", () => {
  // scroll reveal
  const targets = document.querySelectorAll(".reveal, .focus-card");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    targets.forEach((t) => io.observe(t));
  } else targets.forEach((t) => t.classList.add("in"));

  // role typing
  const out = document.getElementById("roleTyped"),
    roles = portfolioData.hero.roles;
  if (reduceMotion) {
    out.textContent = roles[0];
    document.querySelector(".caret").style.display = "none";
  } else {
    let r = 0,
      c = 0,
      del = false;
    const tick = () => {
      const word = roles[r];
      c += del ? -1 : 1;
      out.textContent = word.slice(0, c);
      let wait = del ? 28 : 65;
      if (!del && c === word.length) {
        del = true;
        wait = 1700;
      } else if (del && c === 0) {
        del = false;
        r = (r + 1) % roles.length;
        wait = 350;
      }
      setTimeout(tick, wait);
    };
    tick();
  }

  // count-up stats (final value is already in the DOM as text if motion is off)
  const counters = document.querySelectorAll("[data-count]");
  if (!reduceMotion)
    counters.forEach((n) => {
      const end = +n.dataset.count,
        t0 = performance.now() + 500;
      n.textContent = "0";
      const step = (t) => {
        const p = Math.min(Math.max((t - t0) / 1100, 0), 1);
        n.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });

  // timeline fill follows scroll
  const tl = document.getElementById("experienceContainer");
  const fill = () => {
    const r = tl.getBoundingClientRect();
    tl.style.setProperty(
      "--tl",
      Math.min(Math.max((innerHeight * 0.7 - r.top) / r.height, 0), 1),
    );
  };
  addEventListener("scroll", fill, { passive: true });
  fill();

  // button ripple
  document.querySelectorAll(".btn").forEach((b) =>
    b.addEventListener("pointerdown", (e) => {
      if (reduceMotion) return;
      const r = b.getBoundingClientRect(),
        s = Math.max(r.width, r.height) / 4,
        rp = document.createElement("span");
      rp.className = "ripple";
      rp.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
      b.appendChild(rp);
      setTimeout(() => rp.remove(), 650);
    }),
  );
  // hero splits apart as you scroll down, About rises into place
  if (!reduceMotion) {
    const hero = document.getElementById("hero"),
      about = document.getElementById("about"),
      root = document.documentElement;
    let ticking = false;
    const split = () => {
      const p = Math.min(Math.max(scrollY / (hero.offsetHeight * 0.75), 0), 1);
      root.style.setProperty("--split", p.toFixed(3));
      root.style.setProperty("--rise", p.toFixed(3));
      ticking = false;
    };
    addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(split);
        }
      },
      { passive: true },
    );
    split();
  }
  if (finePointer && !reduceMotion) {
    // spotlight glow follows pointer
    document.querySelectorAll(".card-fx").forEach((c) =>
      c.addEventListener("pointermove", (e) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty("--mx", `${e.clientX - r.left}px`);
        c.style.setProperty("--my", `${e.clientY - r.top}px`);
      }),
    );
    // project card tilt
    document.querySelectorAll(".project-card").forEach((c) => {
      c.addEventListener("pointermove", (e) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty(
          "--ry",
          `${((e.clientX - r.left) / r.width - 0.5) * 7}deg`,
        );
        c.style.setProperty(
          "--rx",
          `${-((e.clientY - r.top) / r.height - 0.5) * 7}deg`,
        );
      });
      c.addEventListener("pointerleave", () => {
        c.style.setProperty("--rx", "0deg");
        c.style.setProperty("--ry", "0deg");
      });
    });
    // magnetic buttons
    document.querySelectorAll(".btn-magnetic").forEach((b) => {
      b.addEventListener("pointermove", (e) => {
        const r = b.getBoundingClientRect();
        b.style.setProperty(
          "--bx",
          `${(e.clientX - r.left - r.width / 2) * 0.18}px`,
        );
        b.style.setProperty(
          "--by",
          `${(e.clientY - r.top - r.height / 2) * 0.28}px`,
        );
      });
      b.addEventListener("pointerleave", () => {
        b.style.setProperty("--bx", "0px");
        b.style.setProperty("--by", "0px");
      });
    });
    // hero parallax
    const hv = document.getElementById("heroVisual");
    hv.addEventListener("pointermove", (e) => {
      const r = hv.getBoundingClientRect();
      hv.style.setProperty(
        "--px",
        ((e.clientX - r.left) / r.width - 0.5).toFixed(2),
      );
      hv.style.setProperty(
        "--py",
        ((e.clientY - r.top) / r.height - 0.5).toFixed(2),
      );
    });
    hv.addEventListener("pointerleave", () => {
      hv.style.setProperty("--px", 0);
      hv.style.setProperty("--py", 0);
    });
  }

  // modal: close on backdrop click
  const modal = document.getElementById("projectModal");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });
});

/* ---- toast + copy email ---- */
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(showToast.id);
  showToast.id = setTimeout(() => t.classList.remove("show"), 2200);
}
document.getElementById("copyEmail").addEventListener("click", async (e) => {
  const btn = e.currentTarget;
  try {
    await navigator.clipboard.writeText(portfolioData.contact.email);
    btn.classList.add("done");
    btn.firstElementChild.className = "fa-solid fa-check";
    showToast("Email address copied");
  } catch (err) {
    showToast("Copy failed. Select the address manually.");
  }
  setTimeout(() => {
    btn.classList.remove("done");
    btn.firstElementChild.className = "fa-regular fa-copy";
  }, 1800);
});
