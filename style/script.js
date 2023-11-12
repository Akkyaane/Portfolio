function showMobileNavigation(){
  const hamburger = document.querySelector('.hamburger').classList.toggle('open');
  const mobileNav = document.querySelector('.mobile-navigation').classList.toggle('active');
}

function closeMobileNavigation() {
  const hamburger = document.querySelector('.hamburger').classList.remove('open');
  const mobileNav = document.querySelector('.mobile-navigation').classList.remove('active');
}

const navLinks = document.querySelectorAll('.mobile-navigation nav a');
  
navLinks.forEach(link => {
    link.addEventListener('click', closeMobileNavigation);
});

function loop(){
  var typed = new Typed("#element", {
      strings: ["m'appelle Jérémie Bayon.", "suis étudiant en informatique.", "suis développeur."],
      typeSpeed: 75,
      backSpeed: 20,
      loop: true,
      });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar ul li a");
  const sections = document.querySelectorAll("section");
  
  const options = {
    threshold: 0.5,
  };

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute("id");
        navbarLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, options);
  
  sections.forEach((section) => {
    observer.observe(section);
  });
});
