// ================= THEME TOGGLE =================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});


// ================= MOBILE NAV =================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    hamburger.innerHTML = navLinks.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});


// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


// ================= CONTACT FORM =================
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    console.log('Form submitted:', formData);

    alert('Thank you! I will get back to you soon.');
    contactForm.reset();
});


// ================= 🔥 MODERN SCROLL ANIMATION =================
const animatedElements = document.querySelectorAll(
    '.section-title, .about-content, .skills-category, .project-card, .timeline-content, .cert-card, .contact-info, .contact-form'
);

// Add initial hidden state
animatedElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.15 });

animatedElements.forEach(el => observer.observe(el));


// ================= 🔥 HERO TEXT ANIMATION =================
window.addEventListener("load", () => {
    const heroText = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    heroText.style.opacity = "0";
    heroText.style.transform = "translateX(-50px)";
    heroText.style.transition = "all 1s ease";

    heroImage.style.opacity = "0";
    heroImage.style.transform = "translateX(50px)";
    heroImage.style.transition = "all 1s ease";

    setTimeout(() => {
        heroText.style.opacity = "1";
        heroText.style.transform = "translateX(0)";
    }, 200);

    setTimeout(() => {
        heroImage.style.opacity = "1";
        heroImage.style.transform = "translateX(0)";
    }, 400);
});

// ================= 🔥 TYPING ANIMATION =================
const typingText = document.querySelector(".typing-text");
const words = ["Frontend Developer", "Web Developer"];
let wordIndex = 0;
let charIndex = 0;

function type() {
    if (!typingText) return;

    if (charIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 80);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 40);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 200);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (typingText) type();
});

// ================= PROJECT OVERLAY =================
function toggleProject(element) {
    const allProjects = document.querySelectorAll('.project-img');

    allProjects.forEach(item => {
        if (item !== element) {
            item.classList.remove('active');
        }
    });

    element.classList.toggle('active');
}

document.addEventListener('click', function (e) {
    if (!e.target.closest('.project-img')) {
        document.querySelectorAll('.project-img').forEach(item => {
            item.classList.remove('active');
        });
    }
});

// ================= FOOTER YEAR =================
document.addEventListener('DOMContentLoaded', function () {
    const yearElement = document.querySelector('footer p');

    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent =
            yearElement.textContent.replace(/\d{4}/, currentYear);
    }
});

// CURSOR GLOW
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});