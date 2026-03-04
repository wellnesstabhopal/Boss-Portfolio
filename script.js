// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
}

// Close nav on link click (mobile)
navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navToggle.classList.remove("open");
      navLinks.classList.remove("open");
    }
  });
});

// Dynamic year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Cursor glow
const cursorGlow = document.querySelector(".cursor-glow");
if (cursorGlow) {
  window.addEventListener("pointermove", (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  });
}

// GSAP animations
window.addEventListener("load", () => {
  if (typeof gsap === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero intro
  gsap.from(".hero-text", {
    y: 30,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
  });

  gsap.from(".hero-photo-wrapper", {
    scale: 0.85,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.1
  });

  gsap.from(".hero-circle", {
    scale: 0.8,
    opacity: 0,
    duration: 1.1,
    ease: "power3.out",
    delay: 0.15
  });

  gsap.from(".hero-card", {
    y: 20,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.18,
    delay: 0.25
  });

  // Section reveal
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    const header = section.querySelector(".section-header");
    const contentBlocks = section.querySelectorAll(
      ".about-grid, .timeline, .cards-grid, .media-grid, .contact-grid"
    );

    if (header) {
      gsap.from(header, {
        scrollTrigger: {
          trigger: section,
          start: "top 75%"
        },
        y: 25,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      });
    }

    if (contentBlocks.length) {
      gsap.from(contentBlocks, {
        scrollTrigger: {
          trigger: section,
          start: "top 70%"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12
      });
    }
  });

  // Timeline items slight stagger
  const timelineItems = document.querySelectorAll(".timeline-item");
  gsap.from(timelineItems, {
    scrollTrigger: {
      trigger: ".timeline",
      start: "top 80%"
    },
    x: -20,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.12
  });

  // Subtle parallax on hero circle
  gsap.to(".hero-circle", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    y: 40,
    ease: "none"
  });
});
