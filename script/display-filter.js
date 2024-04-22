// FUNCIÓN PARA DESPLEGAR MÁS CONTENIDO EN EL APARTADO DE LAS CARTAS
document.addEventListener("DOMContentLoaded", function() {
    var botonVerMas = document.getElementById("button-filtro");
    var contenidoAdicional = document.getElementById("container-filtros");

    botonVerMas.addEventListener("click", function() {
        if (contenidoAdicional.classList.contains("oculto")) {
            contenidoAdicional.style.maxHeight = contenidoAdicional.scrollHeight + "px";
            botonVerMas.textContent = "Ocultar opciones";
        } else {
            contenidoAdicional.style.maxHeight = "0";
            botonVerMas.textContent = "Opciones de filtros";
        }
        contenidoAdicional.classList.toggle("oculto");
    });
});

