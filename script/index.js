function captureScreenSize() {
    let screenWidth = $(window).width();
    let animals = $('#anim-necesitados-primera-parte');

    if (screenWidth < 992) {
        animals.removeClass('style-light');
    } else {
        animals.addClass('style-light');
    }
}

// FUNCIÓN PARA CAPTURAR EL TAMAÑO DE LA PANTALLA PARA MANEJO DE INTERFAZ RESPONSIVA
$(document).ready(function () {
    // Definir la función captureScreenSize


    // LLAAMAR A LA FUNCIÓN AL CARGAR LA PÁGINA
    captureScreenSize();

    // LLAAMAR A LA FUNCIÓN AL CAMBIAR EL TAMAÑO DE LA PANTALLA
    $(window).resize(captureScreenSize);
});



// FUNCIÓM PARA CARGAR EL NAVBAR Y FOOTER EN TODAS LAS PÁGINAS
$(document).ready(function () {
    $('.navbarContainer').load('navbar.html');
    $('.footerContainer').load('footer.html');
});
