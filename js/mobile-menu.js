(() => {

    const refs = {
        openMenuButton: document.querySelector("[data-menu-open]"),
        closeMenuButton: document.querySelector("[data-menu-close]"),
        menu: document.querySelector("[data-menu]")
    }
  
    refs.openMenuButton.addEventListener('click', toggleMenu);
    refs.closeMenuButton.addEventListener('click', toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle('is-open');
  }
    
})();