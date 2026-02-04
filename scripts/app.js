document.addEventListener('DOMContentLoaded', () => {
    // Fade-in Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    // Create Mobile Nav Overlay
    const mobileNav = document.createElement('nav');
    mobileNav.classList.add('mobile-nav');
    mobileNav.innerHTML = `
        <ul>
            <li><a href="#concept">Concept</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#information">Information</a></li>
            <li><a href="https://www.instagram.com/suna.gitune.2604/" target="_blank">Instagram</a></li>
        </ul>
    `;
    document.body.appendChild(mobileNav);

    const mobileLinks = mobileNav.querySelectorAll('a');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Close menu when clicking outside (on the overlay)
    mobileNav.addEventListener('click', (e) => {
        if (e.target === mobileNav || e.target.tagName === 'UL') {
            closeMenu();
        }
    });

    function closeMenu() {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Smooth Scroll for Logo
    document.querySelector('.logo a').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
