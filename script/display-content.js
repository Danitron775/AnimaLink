// FUNCIÓN PARA DESPLEGAR MÁS CONTENIDO EN EL APARTADO DE LAS CARTAS
document.addEventListener("DOMContentLoaded", function() {
    var botonVerMas = document.getElementById("ver-mas");
    var contenidoAdicional = document.getElementById("contenido-adicional");

    botonVerMas.addEventListener("click", function() {
        if (contenidoAdicional.classList.contains("oculto")) {
            contenidoAdicional.style.maxHeight = contenidoAdicional.scrollHeight + "px";
            botonVerMas.textContent = "Ver menos";
        } else {
            contenidoAdicional.style.maxHeight = "0";
            botonVerMas.textContent = "Ver más";
        }
        contenidoAdicional.classList.toggle("oculto");
    });
});

