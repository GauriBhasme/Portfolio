// rendering hero section
function renderHero() {
  const hero = portfolioData.hero;

  document.getElementById("heroIntro").textContent = hero.intro;

  document.getElementById("heroTitle").innerHTML =
    `Hi, I'm <span>${hero.name}</span><br>a ${hero.title}.`;

  document.getElementById("heroDesc").textContent = hero.description;

  document.getElementById("heroImage").src = hero.image;

  const socialsContainer = document.getElementById("heroSocials");

  hero.socials.forEach(social => {
    const a = document.createElement("a");
    a.href = social.link;

    const icon = document.createElement("i");
    icon.className = social.icon;

    a.appendChild(icon);
    socialsContainer.appendChild(a);
  });
}

// renderHero();

//render skills section
function renderSkills() {
    const skillsData = portfolioData.skillsData;

  const container = document.getElementById("skillsContainer");

  if (!container) return;

  container.innerHTML = "";

  skillsData.forEach(skill => {

    const card = document.createElement("div");
    card.className = "skill-card";

    card.innerHTML = `
      <div class="skill-header">
        <h3>${skill.name}</h3>
        <p>${skill.years} years • ${skill.projects} projects</p>
      </div>

      <div class="progress">
        <div class="progress-bar" style="width:${skill.level}%"></div>
      </div>

      <span class="skill-percent">${skill.level}%</span>
    `;

    container.appendChild(card);

  });
}

function renderProjects() {
  const projectsData = portfolioData.projects;
const projectsContainer = document.getElementById("projectsContainer");

projectsData.forEach(project => {

  const techLabels = project.tech
    .map(t => `<span class="tech-badge">${t}</span>`)
    .join("");

  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <span class="project-tag">${project.tag}</span>

    <h3>${project.name}</h3>

    <p>${project.description}</p>

    <div class="tech-stack">
      ${techLabels}
    </div>

    <a href="${project.github}" target="_blank" class="github-btn">
      <i class="fa-brands fa-github" style="margin-right: 10px; font-size: 20px; color: white;"></i>View GitHub
    </a>
  `;

  projectsContainer.appendChild(card);

});
}

function renderExperience() {
    const experienceData = portfolioData.experience;
    const expContainer = document.getElementById("experienceContainer");

experienceData.forEach(exp => {

  const tasksHTML = exp.tasks
    .map(task => `<li>${task}</li>`)
    .join("");

  const card = document.createElement("div");
  card.className = "experience-card";

  card.innerHTML = `
    <span class="exp-tag">${exp.tag}</span>

    <span class="exp-duration">${exp.duration}</span>

    <h3>${exp.role}</h3>

    <p class="exp-location">${exp.location}</p>

    <ul class="exp-tasks">
      ${tasksHTML}
    </ul>
  `;

  expContainer.appendChild(card);

});

}

function renderIntrests(){
    const interestsData = portfolioData.interests;
    const interestBtns = document.querySelectorAll(".interest-btn");

interestBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    interestBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

}

document.addEventListener("DOMContentLoaded", () => {

  renderHero();
  renderSkills();
  renderProjects()
  renderExperience();
  renderIntrests();

});

