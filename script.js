const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigating to:", link.textContent);
    });
});


const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Button clicked:", button.textContent);
    });
});


window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
    } else {
        nav.style.boxShadow = "none";
    }
});
const typingText = document.getElementById("typing-text");

const titles = [
    "BSAI Student",
    "Machine Learning Enthusiast",
    "Aspiring AI Engineer"
];

let titleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentTitle = titles[titleIndex];

    if (!deleting) {
        typingText.textContent =
            currentTitle.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentTitle.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentTitle.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;

            titleIndex++;

            if (titleIndex === titles.length) {
                titleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();
/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    "section, .project-item, .skill-card, .timeline-item, .contact-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 100) {
            element.classList.add("show");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});
/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinksMenu = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinksMenu.classList.toggle("show");

});


const mobileLinks = document.querySelectorAll(".nav-links a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinksMenu.classList.remove("show");

    });

});