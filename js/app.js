// Esperamos que cargue el DOM
document.addEventListener('DOMContentLoaded', function () {
    
    // Seleccion de elementos
    const toggleBtn = document.querySelector('.navbar__toggle-btn');
    const mobileMenu = document.querySelector('.navbar__mobile-menu');

    // Función para alternar la visibilidad del menú móvil basándose en el ancho de la ventana
    function toggleMobileMenu() {
        // Si el ancho de la ventana es menor o igual a 895px, muestra el menú, de lo contrario, ocúltalo
        mobileMenu.style.display = (window.innerWidth <= 895) ? 'flex' : 'none';
    }

    // EventListener para mostrar u ocultar el menú móvil
    toggleBtn.addEventListener('click', function () {
        // Comprueba si el menú móvil está actualmente visible
        if (mobileMenu.style.display === 'flex') {
            // Si está visible, ocúltalo
            mobileMenu.style.display = 'none';
        } else {
            // Si está oculto, muéstralo
            mobileMenu.style.display = 'flex';
        }
    });
    

    // EventListener pendiente de cambio de tamaño de ventana para manejar la visibilidad del menú móvil
    window.addEventListener('resize', function () {
        // Llama a la función para alternar la visibilidad del menú móvil
        toggleMobileMenu();

        // Cierra el menú móvil si la pantalla cambia a un tamaño de escritorio (mayor a 895px)
        if (window.innerWidth > 895) {
            mobileMenu.style.display = 'none';
        }
    });

    // Llama a la función para alternar la visibilidad del menú móvil cuando la página se carga por primera vez
    toggleMobileMenu();
});

