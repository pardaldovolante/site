document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            
            // Fecha outros dropdowns abertos
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove('show');
                }
            });
            
            document.querySelectorAll('.dropdown-toggle.active').forEach(activeToggle => {
                if (activeToggle !== this) {
                    activeToggle.classList.remove('active');
                }
            });
            
            // Alterna visibilidade do dropdown atual
            dropdownMenu.classList.toggle('show');
            this.classList.toggle('active');
        });
    });
    
    // Fecha dropdown ao clicar fora
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown-item')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
            });
            document.querySelectorAll('.dropdown-toggle.active').forEach(toggle => {
                toggle.classList.remove('active');
            });
        }
    });
});