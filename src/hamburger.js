// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const sidebarMobile = document.querySelector('.sidebar-mobile');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.close-btn');
    
    // Abrir menu
    navToggle?.addEventListener('click', function() {
        sidebarMobile.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Fechar menu
    function closeMenu() {
        sidebarMobile.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    closeBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);
    
    // Fechar ao clicar em um link
    sidebarMobile?.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            closeMenu();
        }
    });
});