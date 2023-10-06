function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}

function loop(){
    var typed = new Typed("#element", {
        strings: ["m'appelle Jérémie Bayon.", "suis étudiant en informatique.", "suis développeur."],
        typeSpeed: 75,
        backSpeed: 20,
        loop: true,
        });
}