// script.js

// Dark Mode Toggle
const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer Animations
const observerOptions = {
    root: null,
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
}, observerOptions);

const sections = document.querySelectorAll('section');
sections.forEach(section => {
    sectionObserver.observe(section);
});

// Hamburger Menu
const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Scroll Effects
const scrollEffectElements = document.querySelectorAll('.scroll-effect');
window.addEventListener('scroll', () => {
    scrollEffectElements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});