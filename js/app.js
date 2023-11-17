// Seleccion de elementos del dom
document.querySelector('.navbar__toggle-btn').addEventListener('click', function() {
    
    // Seleccion del elemento del DOM que tiene la clase 'navbar__mobile-menu'.
    var mobileMenu = document.querySelector('.navbar__mobile-menu');
    
    // Cambia el estilo de visualización del menú móvil.
    // Si el menú móvil está oculto ('none' o vacío), lo muestra cambiando a 'flex'.
    // Si el menú móvil ya está visible ('flex'), lo oculta cambiando a 'none'.
    mobileMenu.style.display = mobileMenu.style.display === 'none' || mobileMenu.style.display === '' ? 'flex' : 'none';
});
