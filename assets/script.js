function showNavbar() {
    const hamburger = document.querySelector('.hamburger').classList.toggle('open');
    const mobileNav = document.querySelector('.mobile-navbar').classList.toggle('active');
}

function closeNavbar() {
    const hamburger = document.querySelector('.hamburger').classList.remove('open');
    const mobileNav = document.querySelector('.mobile-navbar').classList.remove('active');
}

const mobileNavbarLinks = document.querySelectorAll('.mobile-navbar nav a');

mobileNavbarLinks.forEach(link => {
    link.addEventListener('click', closeNavbar);
});

function changeNavBarStyleOnScroll() {
    document.addEventListener("DOMContentLoaded", function () {
        let navbar = document.getElementById("header");
        let logo = document.getElementById("logo");

        window.addEventListener("scroll", function () {
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    });
}

changeNavBarStyleOnScroll()

AOS.init({
    duration: 2000,
    once: true,
});

let linkedin_logo_animation_1 = bodymovin.loadAnimation({
    container: document.getElementById('linkedin-logo-animation-home-container'),
    path: '../assets/content/animations/linkedin-logo.json',
    render: 'svg',
    loop: true,
    autoplay: true,
    name: 'Linkedin Logo Animation'
});
let github_logo_animation_1 = bodymovin.loadAnimation({
    container: document.getElementById('github-logo-animation-home-container'),
    path: '../assets/content/animations/github-logo.json',
    render: 'svg',
    loop: true,
    autoplay: true,
    name: 'Github Logo Animation'
});
let linkedin_logo_animation_2 = bodymovin.loadAnimation({
    container: document.getElementById('linkedin-logo-animation-footer-container'),
    path: '../assets/content/animations/linkedin-logo.json',
    render: 'svg',
    loop: true,
    autoplay: true,
    name: 'Linkedin Logo Animation'
});
let github_logo_animation_2 = bodymovin.loadAnimation({
    container: document.getElementById('github-logo-animation-footer-container'),
    path: '../assets/content/animations/github-logo.json',
    render: 'svg',
    loop: true,
    autoplay: true,
    name: 'Github Logo Animation'
});

let copy = document.querySelector(".slider").cloneNode(true);
document.querySelector(".logos").appendChild(copy);