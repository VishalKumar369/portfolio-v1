const sections = ["home", "about", "services", "portfolio", "contact"]; // match IDs in index.html

// Load all sections dynamically into their respective containers
async function loadSections() {
  for (const section of sections) {
    try {
      const res = await fetch(`components/${section}.html`);
      const html = await res.text();

      const targetEl = document.getElementById(section);
      if (targetEl) {
        targetEl.innerHTML = html;
      }
    } catch (error) {
      console.error(`Failed to load ${section}.html`, error);
    }
  }

  initNavigation();

  // Initialize typing effect
  const typedTarget = document.querySelector(".typing");
  if (typedTarget) {
    new Typed(".typing", {
      strings: ["", "Web Designer", "Web Developer", "Graphics Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }
}

// Setup navigation and interactions
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav a");
  const allSections = document.querySelectorAll(".section");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const target = link.getAttribute("href").replace("#", "");
      updateNavActive(link);
      updateBackSection(target);
      setActiveSection(target);
    });
  });

  const hireMe = document.querySelector(".hire-me");
  if (hireMe) {
    hireMe.addEventListener("click", function () {
      const sectionIndex = this.getAttribute("data-section-index");
      const target = this.getAttribute("href").replace("#", "");
      setActiveSection(target);
      updateNavActive(document.querySelector(`.nav a[href="#${target}"]`));
      updateBackSection(sections[sectionIndex]);
    });
  }

  const navTogglerBtn = document.querySelector(".nav-toggler");
  const aside = document.querySelector(".aside");

  navTogglerBtn?.addEventListener("click", () => {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    allSections.forEach((section) => section.classList.toggle("open"));
  });
}

// Switch active section
function setActiveSection(targetId) {
  sections.forEach((section) => {
    const el = document.getElementById(section);
    if (el) el.classList.remove("active");
  });

  const targetEl = document.getElementById(targetId);
  if (targetEl) targetEl.classList.add("active");
}

// Update nav active class
function updateNavActive(activeLink) {
  document.querySelectorAll(".nav a").forEach((link) => {
    link.classList.remove("active");
  });
  activeLink.classList.add("active");
}

// Add back-section class to previous active
function updateBackSection(currentId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("back-section");
    if (section.id !== currentId && section.classList.contains("active")) {
      section.classList.add("back-section");
    }
  });
}

// Start the app
window.addEventListener("DOMContentLoaded", loadSections);
