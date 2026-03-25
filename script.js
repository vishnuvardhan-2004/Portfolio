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


// ================= SCROLL ANIMATIONS =================
function animateOnScroll() {
    const elements = document.querySelectorAll(
        '.timeline-content, .skills-category, .project-card, .cert-card'
    );

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screen = window.innerHeight / 1.3;

        if (position < screen) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
}

document.querySelectorAll(
    '.timeline-content, .skills-category, .project-card, .cert-card'
).forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);


// ================= PROJECT CLICK ANIMATION =================

// Toggle project overlay
function toggleProject(element) {
    const allProjects = document.querySelectorAll('.project-img');

    // Close others
    allProjects.forEach(item => {
        if (item !== element) {
            item.classList.remove('active');
        }
    });

    // Toggle clicked one
    element.classList.toggle('active');
}

// Close when clicking outside
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