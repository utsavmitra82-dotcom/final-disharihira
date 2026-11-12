// Closes the phone menu (called after a menu link is tapped).

const closeMobileMenu = () => {
  selectOne("#main-nav").classList.remove("open");
  selectOne("#menu-button").setAttribute("aria-expanded", "false");
};
