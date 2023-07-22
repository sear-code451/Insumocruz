
// ? tag: button-menu-navbar

// * Needed for the button (necesario para el botón)

// tags necessary

const menu_nav = document.querySelector(".content-menu-nav");
const list_menu_nav = document.getElementById("list-menu-nav");


// FUNCTION necessary

const navMenu = () => {
    // active : button content-menu-nav
      menu_nav.classList.toggle('active-nav');
      list_menu_nav.classList.toggle('active');
};