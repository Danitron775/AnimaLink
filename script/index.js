// FUNCIÓM PARA CARGAR EL NAVBAR Y FOOTER EN TODAS LAS PÁGINAS
$(document).ready(function () {
    $('.navbarContainer').load('navbar.html');
});

$(document).ready(function () {
    $('.footerContainer').load('footer.html');
});

// FUNCIÓN PARA CAPTURAR EL TAMAÑO DE LA PANTALLA PARA MANEJO DE INTERFAZ RESPONSIVA
$(document).ready(function () {
    // Definir la función captureScreenSize
    function captureScreenSize() {
        var screenWidth = $(window).width();
        var animals = $('#anim-necesitados-primera-parte');

        if (screenWidth < 992) {
            animals.removeClass('style-light');
        } else {
            animals.addClass('style-light');
        }
    }

    // LLAAMAR A LA FUNCIÓN AL CARGAR LA PÁGINA
    captureScreenSize();

    // LLAAMAR A LA FUNCIÓN AL CAMBIAR EL TAMAÑO DE LA PANTALLA
    $(window).resize(captureScreenSize);
});
