$(document).ready(function () {
    var url = window.location.pathname;
    let inicio = document.getElementById("inicio");
    let animimals = document.getElementById("anim-necesitados");
    let apadrina = document.getElementById("apadrinamiento");
    let contacto = document.getElementById("contacto");
    let faq = document.getElementById("faq");

    if (url.includes("inicio.html")) {
        inicio.classList.add("active");
        animimals.classList.add("inactive");
        apadrina.classList.add("inactive");
        contacto.classList.add("inactive");
        faq.classList.add("inactive");
    } else if (url.includes("animales-necesitados.html")) {
        animimals.classList.add("active");
        inicio.classList.add("inactive");
        apadrina.classList.add("inactive");
        contacto.classList.add("inactive");
        faq.classList.add("inactive");
    } else if (url.includes("apadrinamiento.html")) {
        apadrina.classList.add("active");
        inicio.classList.add("inactive");
        animimals.classList.add("inactive");
        contacto.classList.add("inactive");
        faq.classList.add("inactive");
    } else if (url.includes("contacto.html")) {
        contacto.classList.add("active");
        inicio.classList.add("inactive");
        animimals.classList.add("inactive");
        apadrina.classList.add("inactive");
        faq.classList.add("inactive");
    } else if (url.includes("faq.html")) {
        faq.classList.add("active");
        inicio.classList.add("inactive");
        animimals.classList.add("inactive");
        apadrina.classList.add("inactive");
        contacto.classList.add("inactive");
    }


});