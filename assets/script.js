function showSvgAnimations() {
    const linkedinLogo1 = bodymovin.loadAnimation({
        container: document.getElementById('linkedin-logo-animation-home-container'),
        path: 'assets/content/animations/linkedin-logo-white.json',
        render: 'svg',
        loop: true,
        autoplay: true,
        name: 'LinkedIn Logo Animation'
    });
    const githubLogo1 = bodymovin.loadAnimation({
        container: document.getElementById('github-logo-animation-home-container'),
        path: 'assets/content/animations/github-logo-white.json',
        render: 'svg',
        loop: true,
        autoplay: true,
        name: 'GitHub Logo Animation'
    });
    const linkedinLogo2 = bodymovin.loadAnimation({
        container: document.getElementById('linkedin-logo-animation-footer-container'),
        path: 'assets/content/animations/linkedin-logo-blue.json',
        path: '../assets/content/animations/linkedin-logo-blue.json',
        render: 'svg',
        loop: true,
        autoplay: true,
        name: 'LinkedIn Logo Animation'
    });
    const githubLogo2 = bodymovin.loadAnimation({
        container: document.getElementById('github-logo-animation-footer-container'),
        path: 'assets/content/animations/github-logo-blue.json',
        path: '../assets/content/animations/github-logo-blue.json',
        render: 'svg',
        loop: true,
        autoplay: true,
        name: 'GitHub Logo Animation'
    });
}

function changeNavbarStyleOnScroll() {
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

function setActiveLink(link) {
    link.classList.add('active');

    setTimeout(function () {
        link.classList.remove('active');
    }, 3000);
}

function openMobileNavbar() {
    const hamburger = document.querySelector('.hamburger').classList.toggle('open');
    const navbar = document.querySelector('.mobile-navbar').classList.toggle('active');
}

function closeMobileNavbar() {
    const hamburger = document.querySelector('.hamburger').classList.remove('open');
    const navbar = document.querySelector('.mobile-navbar').classList.remove('active');
}

function useMobileNavbar() {
    const links = document.querySelectorAll('.mobile-navbar nav a');

    links.forEach(link => {
        link.addEventListener('click', closeMobileNavbar);
    });
}

function showCarousel() {
    document.addEventListener("DOMContentLoaded", function () {
        const carouselWrapper = document.querySelector(".carousel-wrapper");
        const prevButton = document.querySelector(".carousel-prev");
        const nextButton = document.querySelector(".carousel-next");
        const images = document.querySelectorAll(".carousel img");
        const indicatorButtons = document.querySelectorAll(".indicator-button");

        let currentIndex = 0;

        prevButton.addEventListener("click", function () {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = images.length - 1;
            }

            updateCarousel();
        });

        nextButton.addEventListener("click", function () {
            if (currentIndex < images.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }

            updateCarousel();
        });

        indicatorButtons.forEach((button, index) => {
            button.addEventListener("click", function () {
                currentIndex = index;

                updateCarousel();
            });
        });

        images.forEach((image, index) => {
            image.addEventListener("click", function () {
                showImage(index);
            });
        });

        function updateCarousel() {
            const itemWidth = images[0].clientWidth;
            const newPosition = -currentIndex * itemWidth;

            carouselWrapper.style.transform = `translateX(${newPosition}px)`;

            indicatorButtons.forEach((button, index) => {
                button.classList.toggle("active", index === currentIndex);
            });
        }

        function showImage(index) {
            const modal = document.createElement("div");

            modal.classList.add("modal");

            const modalContent = document.createElement("div");

            modalContent.classList.add("modal-content");
            modal.appendChild(modalContent);

            const closeModal = document.createElement("span");

            closeModal.classList.add("close-modal");
            closeModal.innerHTML = "&times;";
            modalContent.appendChild(closeModal);

            const image = document.createElement("img");

            image.src = images[index].src;
            image.alt = `Image ${index + 1}`;
            modalContent.appendChild(image);

            document.body.appendChild(modal);

            modal.addEventListener("click", function (event) {
                if (event.target === modal) {
                    modal.remove();
                }
            });

            closeModal.addEventListener("click", function () {
                modal.remove();
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('load', function () {
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('.data-loader').style.display = 'none';
        document.body.style.overflow = 'visible';
        document.documentElement.style.overflow = 'visible';
    });
});

AOS.init({
    duration: 2000,
    once: true,
});

changeNavbarStyleOnScroll()
showCarousel()