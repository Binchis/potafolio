// Inicializar animaciones de scroll (AOS)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,    // Duración de la animación en ms
        offset: 100,       // Píxeles antes de activar la animación
        once: true,        // Que solo se anime una vez al bajar
        easing: 'ease-out-cubic'
    });
});

console.log("Portafolio Binchis cargado correctamente 🎨");