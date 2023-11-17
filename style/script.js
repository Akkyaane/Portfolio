function loop(){
  var typed = new Typed("#element", {
      strings: ["m'appelle<br>Jérémie Bayon.", "suis étudiant<br>en informatique.", "suis développeur."],
      typeSpeed: 75,
      backSpeed: 20,
      loop: true,
      });
}

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

const hiddenElementsX = document.querySelectorAll('.hidden-x');
hiddenElementsX.forEach((el) => observer.observe(el));

const hiddenElementsY = document.querySelectorAll('.hidden-y');
hiddenElementsY.forEach((el) => observer.observe(el));

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

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
