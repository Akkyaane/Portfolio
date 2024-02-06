function openNavbar() {
    const hamburger = document.querySelector('.hamburger').classList.toggle('open');
    const mobileNav = document.querySelector('.mobile-navbar').classList.toggle('active');
}

function closeNavbar() {
    const hamburger = document.querySelector('.hamburger').classList.remove('open');
    const mobileNav = document.querySelector('.mobile-navbar').classList.remove('active');
}

function showMobileNavbar() {
    const mobileNavbarLinks = document.querySelectorAll('.mobile-navbar nav a');

    mobileNavbarLinks.forEach(link => {
        link.addEventListener('click', closeNavbar);
    });
}

function changeNavBarStyleOnScroll() {
    document.addEventListener("DOMContentLoaded", function () {
        const navbar = document.getElementById("header");

        window.addEventListener("scroll", function () {
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    });
}

function svgAnimations() {
    const linkedin_logo_animation_1 = bodymovin.loadAnimation({
        container: document.getElementById('linkedin-logo-animation-home-container'),
        path: 'assets/content/animations/linkedin-logo-white.json',
        render: 'svg',
        loop: true,
        autoplay: true,
        name: 'Linkedin Logo Animation'
    });
    const github_logo_animation_1 = bodymovin.loadAnimation({
        container: document.getElementById('github-logo-animation-home-container'),
        path: 'assets/content/animations/github-logo-white.json',
        render: 'svg',
        loop: true,
        autoplay: true,
        name: 'Github Logo Animation'
    });
    const linkedin_logo_animation_2 = bodymovin.loadAnimation({
        container: document.getElementById('linkedin-logo-animation-footer-container'),
        path: 'assets/content/animations/linkedin-logo-blue.json',
        path: '../assets/content/animations/linkedin-logo-blue.json',
        path: '../../assets/content/animations/linkedin-logo-blue.json',
        render: 'svg',
        loop: true,
        autoplay: true,
        name: 'Linkedin Logo Animation'
    });
    const github_logo_animation_2 = bodymovin.loadAnimation({
        container: document.getElementById('github-logo-animation-footer-container'),
        path: 'assets/content/animations/github-logo-blue.json',
        path: '../assets/content/animations/github-logo-blue.json',
        path: '../../assets/content/animations/github-logo-blue.json',
        render: 'svg',
        loop: true,
        autoplay: true,
        name: 'Github Logo Animation'
    });
}

AOS.init({
    duration: 2000,
    once: true,
});

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('load', function () {
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('.data-loader').style.display = 'none';

        document.body.style.overflow = 'visible';
        document.documentElement.style.overflow = 'visible';
    });
});

function setActiveLink(link) {
    var links = document.querySelectorAll('nav a');
    links.forEach(function (item) {
        item.classList.remove('active');
    });

    link.classList.add('active');

    setTimeout(function () {
        link.classList.remove('active');
    }, 5000);
}

changeNavBarStyleOnScroll()