// FUNCIÓN PARA MOSTRAR SOLO SEIS CARTAS A LA VEZ
function showThreeCards() {
    // SELECCIÓNA TODAS LAS TARJETAS DE ANIMALES
    let cards = document.querySelectorAll('#animal-cards .col');

    // ITERA SOBRE LAS TARJETAS Y OCULTA TODAS
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }

    // MOSTRAR SOLO LAS SEIS TRES TARJETAS
    for (let i = 0; i < 6; i++) {
        if (cards[i]) {
            cards[i].style.display = 'flex';
        }
    }
}

// FUNCIÓN PARA CARGAR MÁS CARTAS CUANDO SE HACE CLIC EN EL BOTÓN "VER MÁS"
document.getElementById('ver-mas').addEventListener('click', function () {
    
    // SELECCIONA TODAS LAS TARJETAS DE ANIMALES
    var cards = document.querySelectorAll('#animal-cards .col');

    // ITERA SOBRE LAS TARJETAS Y MUESTRA LAS SIGUIENTES TRES QUE ESTÉN OCULTAS
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].style.display === 'none') {
            for (var j = i; j < i + 6; j++) {
                if (cards[j]) {
                    cards[j].style.display = 'flex';
                }
            }
            break;
        }
    }
    // SI YA NO HAY MÁS TARJETAS OCULTAS, OCULTA EL BOTÓN "VER MÁS"
    if (i === cards.length) {
        document.getElementById('ver-mas').style.display = 'none';
    }


});

// MUESTRA LAS PRIMERAS TRES TARJETAS AL CARGAR LA PÁGINA
showThreeCards();