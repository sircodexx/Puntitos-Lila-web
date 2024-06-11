// JavaScript para agregar animaciones
document.addEventListener("DOMContentLoaded", function() {
    const surpriseBtn = document.querySelector('.btn-surprise');

    // Agregar animación al hacer clic en el botón de sorpresa
    surpriseBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        // Agregar aquí tu código de animación, como desplazamiento suave a la página de productos
        // Por ejemplo:
        window.scrollTo({
            top: document.querySelector('.productos-section').offsetTop,
            behavior: 'smooth'
        });
    });
});
