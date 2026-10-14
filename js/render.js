/* Renders content from data.js using DOM APIs (textContent), never innerHTML with data. */
const $ = (id) => document.getElementById(id);

function el(tag, opts = {}, children = []) {
  const n = document.createElement(tag);
  if (opts.class) n.className = opts.class;
  if (opts.text != null) n.textContent = opts.text;
  if (opts.attrs)
    Object.entries(opts.attrs).forEach(([k, v]) => n.setAttribute(k, v));
  [].concat(children).forEach((c) => c && n.appendChild(c));
  return n;
}
const icon = (cls) => el("i", { class: cls, attrs: { "aria-hidden": "true" } });
const chips = (items, cls = "chip") =>
  items.map((t) => el("li", { class: cls, text: t }));

function socialLinks(container, socials) {
  socials.forEach((s) => {
    const label = (s.icon.match(/fa-(github|linkedin|instagram|twitter)/) || [
      ,
      "profile",
    ])[1];
    container.appendChild(
      el(
        "a",
        {
          attrs: {
            href: s.link,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": label,
          },
        },
        icon(s.icon),
      ),
    );
  });
}

function renderHero() {
  const h = portfolioData.hero;
  $("logoName").textContent = h.name;
  $("footName").textContent = h.name;
  $("heroIntro").textContent = `Hi, I'm ${h.name}`;
  const title = $("heroTitle");
  h.headline.split(" ").forEach((word, i) => {
    title.appendChild(
      el("span", { class: "w", text: word, attrs: { style: `--w:${i}` } }),
    );
    title.appendChild(document.createTextNode(" "));
  });
  $("heroDesc").textContent = h.description;
  const img = $("heroImage");
  img.src = h.image;
  img.alt = `Portrait of ${h.name}`;
  socialLinks($("heroSocials"), h.socials);
  h.floatingTech.forEach((t) =>
    $("floatTech").appendChild(
      el("li", { attrs: { title: t.label } }, [
        icon(t.icon),
        el("span", {
          class: "sr-only",
          text: t.label,
          attrs: {
            style:
              "position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)",
          },
        }),
      ]),
    ),
  );

  // Stats are derived from the data, so they can never drift from the content.
  const techCount = new Set(portfolioData.projects.flatMap((p) => p.tech)).size;
  [
    [portfolioData.projects.length, "Featured projects"],
    [techCount, "Technologies used"],
    [portfolioData.experience.length, "Hands-on experiences"],
  ].forEach(([n, label]) =>
    $("heroStats").appendChild(
      el("div", {}, [
        el("dt", { text: label }),
        el("dd", { text: String(n), attrs: { "data-count": n } }),
      ]),
    ),
  );
}

function renderAbout() {
  const a = portfolioData.about;
  $("aboutTitle").textContent = a.intro;
  $("aboutLead").textContent = a.lead;
  a.paragraphs.forEach((t) => $("aboutText").appendChild(el("p", { text: t })));
  $("aboutStrengths").append(...chips(a.strengths));
  $("aboutGoal").textContent = a.goals;
  a.focus.forEach((f, i) => {
    const card = el(
      "article",
      {
        class: "focus-card card-fx",
        attrs: { role: "listitem", style: `transition-delay:${i * 90}ms` },
      },
      [
        el("span", { class: "ico" }, icon(f.icon)),
        el("h3", { text: f.title }),
        icon("fa-solid fa-arrow-up-right-from-square go"),
        el("p", { text: f.text }),
        el("ul", { class: "chips" }, chips(f.tags)),
      ],
    );
    $("focusList").appendChild(card);
  });
}

function renderSkills() {
  const meta = Object.fromEntries(
    portfolioData.skillsData.map((s) => [
      s.name,
      `${s.years} yrs · ${s.projects} projects`,
    ]),
  );
  portfolioData.skillGroups.forEach((g, i) => {
    const items = g.items.map((n) =>
      el("li", {}, [
        el("span", { text: n }),
        meta[n] ? el("small", { text: meta[n] }) : null,
      ]),
    );
    $("skillsContainer").appendChild(
      el(
        "article",
        { class: "skill-card card-fx reveal", attrs: { style: `--i:${i}` } },
        [
          el("span", { class: "ico" }, icon(g.icon)),
          el("h3", { text: g.title }),
          el("p", { class: "note", text: g.note }),
          el("ul", { class: "skill-items" }, items),
        ],
      ),
    );
  });
}

function renderProjects() {
  portfolioData.projects.forEach((p, i) => {
    const cover = el(
      "div",
      { class: "project-cover" },
      p.image
        ? el("img", {
            attrs: {
              src: p.image,
              alt: `${p.name} screenshot`,
              loading: "lazy",
              width: "640",
              height: "360",
            },
          })
        : el(
            "div",
            { class: "cover-art", attrs: { "aria-hidden": "true" } },
            icon(
              p.tag.match(/AI/i)
                ? "fa-solid fa-brain"
                : p.tag.match(/Full/i)
                  ? "fa-solid fa-layer-group"
                  : "fa-solid fa-code",
            ),
          ),
    );
    const actions = el("div", { class: "project-actions" });
    if (p.github)
      actions.appendChild(
        el(
          "a",
          {
            class: "link-arrow",
            attrs: {
              href: p.github,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": `${p.name} on GitHub`,
            },
          },
          [icon("fa-brands fa-github"), document.createTextNode("Code")],
        ),
      );
    if (p.live)
      actions.appendChild(
        el(
          "a",
          {
            class: "link-arrow",
            attrs: {
              href: p.live,
              target: "_blank",
              rel: "noopener noreferrer",
            },
          },
          [
            document.createTextNode("Live demo"),
            icon("fa-solid fa-arrow-up-right-from-square"),
          ],
        ),
      );
    const card = el(
      "article",
      {
        class: "project-card card-fx reveal",
        attrs: {
          style: `--i:${i}`,
          role: "button",
          tabindex: "0",
          "aria-haspopup": "dialog",
          "aria-label": `View details for ${p.name}`,
        },
      },
      [
        cover,
        el("div", { class: "project-body" }, [
          el("span", { class: "project-tag", text: p.tag }),
          el("h3", { text: p.name }),
          el("p", { text: p.description }),
          el("ul", { class: "tech-stack" }, chips(p.tech, "tech-badge")),
          actions,
        ]),
      ],
    );
    card.addEventListener("click", (event) => {
      if (!event.target.closest("a")) openProject(p);
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProject(p);
      }
    });
    $("projectsContainer").appendChild(card);
  });
}

/* Detail view: only sections that exist in data are shown, so nothing is invented. */
function openProject(p) {
  const d = $("projectModal");
  d.textContent = "";
  const sec = (title, node) =>
    node && el("div", {}, [el("h4", { text: title }), node]);
  const list = (arr) =>
    arr && arr.length
      ? el(
          "ul",
          { class: "bul" },
          arr.map((t) => el("li", { text: t })),
        )
      : null;
  const text = (t) => (t ? el("p", { text: t }) : null);
  const close = el(
    "button",
    {
      class: "icon-btn pm-close",
      attrs: { type: "button", "aria-label": "Close project details" },
    },
    icon("fa-solid fa-xmark"),
  );
  close.addEventListener("click", () => d.close());
  const links = el("div", { class: "pm-links" });
  if (p.github)
    links.appendChild(
      el(
        "a",
        {
          class: "btn btn-ghost",
          attrs: {
            href: p.github,
            target: "_blank",
            rel: "noopener noreferrer",
          },
        },
        [
          icon("fa-brands fa-github"),
          document.createTextNode("View on GitHub"),
        ],
      ),
    );
  if (p.live)
    links.appendChild(
      el(
        "a",
        {
          class: "btn btn-primary",
          attrs: { href: p.live, target: "_blank", rel: "noopener noreferrer" },
        },
        [
          document.createTextNode("Live demo"),
          icon("fa-solid fa-arrow-up-right-from-square"),
        ],
      ),
    );
  d.appendChild(
    el(
      "div",
      { class: "pm-inner" },
      [
        close,
        el("span", {
          class: "project-tag",
          text: p.tag,
          attrs: { style: "justify-self:start" },
        }),
        el("h3", { text: p.name, attrs: { id: "pmTitle" } }),
        el("p", { text: p.description }),
        sec("Problem", text(p.problem)),
        sec("Solution", text(p.solution)),
        sec("Key features", list(p.features)),
        sec("My contribution", text(p.contribution)),
        sec(
          "Tech stack",
          el("ul", { class: "tech-stack" }, chips(p.tech, "tech-badge")),
        ),
        sec("Architecture", text(p.architecture)),
        sec("Engineering decisions", list(p.decisions)),
        sec("Security & reliability", list(p.security)),
        sec("Lessons learned", text(p.lessons)),
        sec("Next steps", list(p.next)),
        links,
      ].filter(Boolean),
    ),
  );
  d.showModal();
}

function renderPrinciples() {
  portfolioData.principles.forEach((p, i) =>
    $("principlesContainer").appendChild(
      el(
        "article",
        { class: "principle card-fx reveal", attrs: { style: `--i:${i % 3}` } },
        [
          el("span", { class: "ico" }, icon(p.icon)),
          el("div", {}, [
            el("h3", { text: p.title }),
            el("p", { text: p.text }),
          ]),
        ],
      ),
    ),
  );
}

function renderExperience() {
  portfolioData.experience.forEach((e, i) =>
    $("experienceContainer").appendChild(
      el(
        "li",
        { class: "exp-card card-fx reveal", attrs: { style: `--i:${i}` } },
        [
          el("div", { class: "exp-top" }, [
            el("span", { class: "exp-tag", text: e.tag }),
            el("span", { class: "exp-duration", text: e.duration }),
          ]),
          el("h3", { text: e.role }),
          el("p", { class: "exp-location", text: e.location }),
          el(
            "ul",
            { class: "exp-tasks" },
            e.tasks.map((t) => el("li", { text: t })),
          ),
        ],
      ),
    ),
  );
  // Education / certifications render only when real entries exist.
  const edu = portfolioData.education.filter((x) => x.degree);
  const certs = portfolioData.certifications || [];
  if (edu.length || certs.length) {
    const grid = el("div", { class: "edu-grid" });
    edu.forEach((x) =>
      grid.appendChild(
        el("article", { class: "edu-card card-fx reveal" }, [
          el("h3", { text: x.degree }),
          el("p", { text: x.institution }),
          el(
            "ul",
            { class: "exp-tasks" },
            (x.highlights || []).map((t) => el("li", { text: t })),
          ),
        ]),
      ),
    );
    certs.forEach((c) =>
      grid.appendChild(
        el("article", { class: "edu-card card-fx reveal" }, [
          el("h3", { text: c.name || c.title }),
          el("p", { text: [c.issuer, c.date].filter(Boolean).join(" · ") }),
        ]),
      ),
    );
    $("eduContainer").appendChild(grid);
  }
}

function renderContact() {
  const c = portfolioData.contact;
  const mail = $("emailLink");
  mail.textContent = c.email;
  mail.href = `mailto:${c.email}`;
  const fb = $("fallbackEmail");
  fb.textContent = c.email;
  fb.href = `mailto:${c.email}`;
  $("phoneText").textContent = c.phone;
  $("locationText").textContent = c.location;
  socialLinks($("contactSocials"), portfolioData.hero.socials);
  c.inquiryTypes.forEach((t, i) => {
    const input = el("input", {
      attrs: { type: "radio", name: "inquiry_type", value: t },
    });
    if (i === 0) input.checked = true;
    $("inquiryTypes").appendChild(
      el("label", {}, [input, el("span", { text: t })]),
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderPrinciples();
  renderExperience();
  renderContact();
  $("year").textContent = new Date().getFullYear();
  document.dispatchEvent(new Event("portfolio:rendered"));
});
