//-------------- navbar ToggleEvent ---------------

document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");

    toggle.innerHTML = menu.classList.contains("active")
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

});

//dark theme 

const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function updateIcon(isDark) {
  themeIcon.className = isDark
    ? "fa-regular fa-sun"
    : "fa-solid fa-moon";
}

const isDark = localStorage.getItem("theme") === "dark";

if (isDark) {
  document.body.classList.add("dark-theme");
}

updateIcon(isDark);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const darkMode = document.body.classList.contains("dark-theme");

  localStorage.setItem("theme", darkMode ? "dark" : "light");
  updateIcon(darkMode);
});


