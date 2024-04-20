// FUNCIÓN PARA CAPTURAR EL TAMAÑO DE LA PANTALLA PARA MANEJO DE INTERFAZ RESPONSIVA
function captureScreenSize() {
    let screenWidth = $(window).width();
    let animals = $('#anim-necesitados-primera-parte');

    if (screenWidth < 992) {
        animals.removeClass('style-light');
    } else {
        animals.addClass('style-light');
    }
}

$(document).ready(function () {

    // LLAAMAR A LA FUNCIÓN AL CARGAR LA PÁGINA
    captureScreenSize();

    // LLAAMAR A LA FUNCIÓN AL CAMBIAR EL TAMAÑO DE LA PANTALLA
    $(window).resize(captureScreenSize);
});