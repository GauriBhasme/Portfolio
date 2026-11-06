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
    const label =
      (s.icon.match(/fa-(github|linkedin|instagram|twitter)/) || [,
        s.icon.includes("envelope") || s.icon.includes("email")
          ? "email"
          : "profile",
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
    [portfolioData.education.length, "Education entries"],
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
          id: p.id || "",
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
  d.returnFocus = document.activeElement;
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
        sec("How I built it", text(p.approach || p.solution)),
        sec("Impact", text(p.impact)),
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
        p.video
          ? mediaButton(p.video, `${p.name} demo video`, "video")
          : null,
        links,
      ].filter(Boolean),
    ),
  );
  d.showModal();
}

function mediaButton(url, label, type) {
  const button = el(
    "button",
    {
      class: "btn btn-ghost",
      attrs: { type: "button" },
    },
    [
      icon(type === "video" ? "fa-solid fa-video" : "fa-solid fa-eye"),
      document.createTextNode(label),
    ],
  );
  button.addEventListener("click", () => openMediaPreview(url, label, type));
  return button;
}

function openMediaPreview(url, title, type) {
  const d = $("projectModal");
  d.returnFocus = document.activeElement;
  d.textContent = "";
  const close = el(
    "button",
    {
      class: "icon-btn pm-close",
      attrs: { type: "button", "aria-label": "Close media preview" },
    },
    icon("fa-solid fa-xmark"),
  );
  close.addEventListener("click", () => d.close());
  const isPdf = /\.pdf(?:$|[?#])/i.test(url);
  const content =
    type === "video"
      ? el("iframe", {
          class: "media-frame",
          attrs: {
            src: url.replace(/\/view(?:\?[^#]*)?$/i, "/preview"),
            title,
            allow:
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowfullscreen: "",
          },
        })
      : isPdf
        ? el("iframe", {
            class: "media-frame document-frame",
            attrs: { src: url, title },
          })
        : el("img", {
            class: "media-image",
            attrs: { src: url, alt: title },
          });
  d.appendChild(
    el("div", { class: "pm-inner media-preview" }, [
      close,
      el("h3", { text: title, attrs: { id: "pmTitle" } }),
      content,
      el(
        "a",
        {
          class: "media-fallback",
          attrs: { href: url, target: "_blank", rel: "noopener noreferrer" },
        },
        [document.createTextNode("Open original file")],
      ),
    ]),
  );
  d.showModal();
}

function openPortfolioDetail(item, type) {
  const d = $("projectModal");
  d.returnFocus = document.activeElement;
  d.textContent = "";
  const close = el(
    "button",
    {
      class: "icon-btn pm-close",
      attrs: { type: "button", "aria-label": `Close ${type} details` },
    },
    icon("fa-solid fa-xmark"),
  );
  close.addEventListener("click", () => d.close());
  const field = (label, value, isList = false) => {
    if (!value || (Array.isArray(value) && !value.length)) return null;
    const content = isList
      ? el(
          "ul",
          { class: "bul" },
          value.map((entry) => el("li", { text: entry })),
        )
      : el("p", { text: value });
    return el("div", {}, [el("h4", { text: label }), content]);
  };
  const solution = item.solution || {};
  const achievement =
    typeof item.achievement === "object"
      ? [item.achievement.position, item.achievement.recognition]
          .filter(Boolean)
          .join(" · ")
      : item.achievement;
  const aiIntegration = Array.isArray(solution.aiIntegration)
    ? solution.aiIntegration.join(", ")
    : solution.aiIntegration;
  const links = el("div", { class: "pm-links" });
  [["offerLetter", "Offer letter"], ["certificate", "Certificate"]].forEach(
    ([key, label]) => {
      if (item[key])
        links.appendChild(mediaButton(item[key], `Preview ${label}`, "document"));
    },
  );
  if (item.linkedProjectId) {
    const project = portfolioData.projects.find(
      (entry) => entry.id === item.linkedProjectId,
    );
    if (project) {
      const projectLink = el(
          "a",
          {
            class: "btn btn-primary",
            attrs: {
              href: `#${project.id}`,
              "aria-label": `View ${project.name} in the projects section`,
            },
          },
          [
            document.createTextNode(`View ${project.name} project`),
            icon("fa-solid fa-arrow-down"),
          ],
      );
      projectLink.addEventListener("click", () => d.close());
      links.appendChild(projectLink);
    }
  }
  d.appendChild(
    el(
      "div",
      { class: "pm-inner" },
      [
        close,
        el("span", { class: "project-tag", text: type }),
        el("h3", {
          text: item.name || item.role || item.title,
          attrs: { id: "pmTitle" },
        }),
        ...[
          field("Type", item.type),
          field("Issuer", item.issuer),
          field("Organizer", item.organizer),
          field("Organization", item.organization),
          field("Platform", item.platform),
          field("Experience type", item.experienceType),
          field("Offered by", item.offeredBy),
          field("Date", item.date),
          field("Duration", item.duration),
          field("Role", item.role || item.myRole || item.team?.role),
          field("Domain", item.domain),
          field("Location", item.location),
          field("Challenge", item.problem || item.problemSolved),
          field("Solution", item.solution?.description || item.solution),
          field("Features", solution.features, true),
          field("AI integration", aiIntegration),
          field("Tech stack", item.techStack, true),
          field("Team members", item.teamMembers),
          field(
            "Practical work / contribution",
            item.contribution || item.contributions,
            true,
          ),
          field("Skills", item.skills, true),
          field("What I learnt", item.learned || item.whatILearned, true),
          field("Achievement", achievement),
          field("Specialization", item.specialization),
          field("Testing skills", item.testingSkills, true),
          field("Testing activities", item.testingActivities, true),
          field("Documentation", item.documentation?.description),
        ].filter(Boolean),
        links.childNodes.length ? links : null,
      ].filter(Boolean),
    ),
  );
  d.showModal();
}

function renderDetailCards(containerId, items, type, emptyMessage) {
  const container = $(containerId);
  if (!items.length) {
    container.appendChild(
      el("p", { class: "details-empty", text: emptyMessage }),
    );
    return;
  }

  items.forEach((item, i) => {
    const title = item.name || item.role || item.title;
    const summary =
      item.description ||
      item.problemSolved ||
      item.achievement?.recognition ||
      item.achievement ||
      item.offeredBy ||
      item.issuer;
    const cover = item.coverImage
      ? el("img", {
          class: "detail-cover",
          attrs: { src: item.coverImage, alt: `${title} cover`, loading: "lazy" },
        })
      : null;
    const card = el(
      "article",
      {
        class: "detail-card card-fx reveal",
        attrs: {
          style: `--i:${i}`,
          role: "button",
          tabindex: "0",
          "aria-haspopup": "dialog",
          "aria-label": `View details for ${title}`,
        },
      },
      [
        cover,
        el("span", { class: "project-tag", text: type }),
        el("h3", { text: title }),
        summary ? el("p", { text: summary }) : null,
        el("span", { class: "detail-more" }, [
          document.createTextNode("View details"),
          icon("fa-solid fa-arrow-right"),
        ]),
      ].filter(Boolean),
    );
    const open = () => openPortfolioDetail(item, type);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
    container.appendChild(card);
  });
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

function renderEducation() {
  portfolioData.education
    .filter((education) => education.degree)
    .forEach((education, i) =>
    $("educationContainer").appendChild(
      el(
        "li",
        { class: "exp-card card-fx reveal", attrs: { style: `--i:${i}` } },
        [
          el("div", { class: "exp-top" }, [
            el("span", { class: "exp-tag", text: education.status || "Education" }),
            el("span", {
              class: "exp-duration",
              text: [education.startDate, education.endDate]
                .filter(Boolean)
                .join(" – "),
            }),
          ]),
          el("h3", { text: education.degree }),
          el("p", {
            class: "exp-location",
            text: [
              education.field,
              education.institution,
              education.specialization,
              education.currentCGPA
                ? `CGPA ${education.currentCGPA}`
                : null,
            ]
              .filter(Boolean)
              .join(" · "),
          }),
          el(
            "ul",
            { class: "exp-tasks" },
            (education.achievements || []).map((achievement) =>
              el("li", { text: achievement }),
            ),
          ),
        ],
      ),
    ),
  );
}

function renderPortfolioSections() {
  renderDetailCards(
    "internshipsContainer",
    portfolioData.internships || [],
    "Internship",
    "Add internship details in js/data.js.",
  );
  renderDetailCards(
    "hackathonsContainer",
    portfolioData.hackathons || [],
    "Hackathon",
    "Add hackathon details in js/data.js.",
  );
  renderDetailCards(
    "certificatesContainer",
    portfolioData.certifications || [],
    "Certificate",
    "Add certificates in js/data.js.",
  );
  renderDetailCards(
    "leadershipContainer",
    portfolioData.leadershipAndContributions || [],
    "Leadership & contribution",
    "Add leadership details in js/data.js.",
  );
  renderDetailCards(
    "communitiesContainer",
    portfolioData.communities || [],
    "Community",
    "Add community participation in js/data.js.",
  );
  renderDetailCards(
    "qaContainer",
    portfolioData.qaExperience || [],
    "QA experience",
    "Add software testing experience in js/data.js.",
  );
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
  renderEducation();
  renderPortfolioSections();
  renderContact();
  $("year").textContent = new Date().getFullYear();
  document.dispatchEvent(new Event("portfolio:rendered"));
});
