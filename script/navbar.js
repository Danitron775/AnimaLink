$(document).ready(function () {
  $('.navbarContainer').load('navbar.html');
});


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  console.log(document.body.scrollTop);
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header-navbar").classList.add("scrolled");
  } else {
    document.getElementById("header-navbar").classList.remove("scrolled");
  }
}