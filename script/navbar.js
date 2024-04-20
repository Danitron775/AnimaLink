// FUNCIÓN PARA UNA NAVBAR STICKY
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header-navbar").classList.add("scrolled");
  } else {
    document.getElementById("header-navbar").classList.remove("scrolled");
  }
}


// FUNCIÓN PARA CAMBIAR EL ESTILO DE LA NAVBAR SEGÚN LA PÁGINA ACTUAL
$(document).ready(function () {
  
  let cuerrentPage = window.location.pathname;
  let currentPage = cuerrentPage.split("/").pop();

  $(".nav-link").each(function () {
    let link = $(this).attr("href");
    if (link == currentPage) {
      $(this).addClass("active");
    } else {
      $(this).addClass("inactive");
    }
  });
});

// LLAMAR A LA FUNCIÓN "NAVBAR STICKY"
window.onscroll = function () { scrollFunction() };

