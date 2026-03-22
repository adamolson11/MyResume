/* script.js — interactivity for Adam Olson's resume site */

// ── Navbar scroll effect ──────────────────────────────────────────────────────
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ── Mobile nav toggle ─────────────────────────────────────────────────────────
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", false);
  });
});

// ── Scroll-reveal animations ──────────────────────────────────────────────────
const revealElements = document.querySelectorAll(
  ".about-grid, .skill-category, .timeline-item, .project-card, .contact-grid"
);

revealElements.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ── Active nav link highlight on scroll ───────────────────────────────────────
const sections = document.querySelectorAll("section[id]");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        document
          .querySelectorAll(".nav-links a")
          .forEach((a) => a.classList.remove("active"));
        const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((s) => sectionObserver.observe(s));

// ── Footer year ───────────────────────────────────────────────────────────────
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Contact form (client-side feedback only) ──────────────────────────────────
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector("button[type='submit']");
    btn.disabled = true;
    btn.textContent = "Sending…";

    // Client-side feedback only — no actual form submission to a backend
    setTimeout(() => {
      formNote.textContent =
        "Thanks for your message! I'll get back to you soon.";
      contactForm.reset();
      btn.disabled = false;
      btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
    }, 1000);
  });
}
