// function cursor(){
//     const cursor = document.querySelector('.cursor');

//     document.addEventListener('mousemove', e => {
//         cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
//     })

//     document.addEventListener('click', () => {
//         cursor.classList.add("expand");

//         setTimeout(() => {
//             cursor.classList.remove("expand");
//         }, 500)
//     })
// }

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
    threshold: 0.5, // Adjust this threshold as needed
  };

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