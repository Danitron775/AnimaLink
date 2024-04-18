$(document).ready(function () {
  var url = window.location.pathname;

  // OBJETO QUE MAPEREA LAS CLAVES DE LOS ELEMENTOS DEL NAVBAR CON SUS VALORES
  var navItems = {
    inicio: document.getElementById("inicio"),
    'animales-necesitados': document.getElementById("anim-necesitados"),
    apadrinamiento: document.getElementById("apadrinamiento"),
    contacto: document.getElementById("contacto"),
    faq: document.getElementById("faq")
  };

  // ITERAR SOBRE EL OBJETO navItems Y AÑADIR LA CLASE "active" AL ELEMENTO DEL NAVBAR QUE CORRESPONDA
  for (var key in navItems) {
    if (url.includes(key + ".html")) {
      navItems[key].classList.add("active");
    } else {
      navItems[key].classList.add("inactive");
    }
  }
});


// FUNCIÓN PARA UNA NAVBAR STICKY
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header-navbar").classList.add("scrolled");
  } else {
    document.getElementById("header-navbar").classList.remove("scrolled");
  }
}