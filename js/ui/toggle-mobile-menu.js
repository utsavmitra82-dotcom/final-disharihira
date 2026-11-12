// Opens/closes the phone menu from the ☰ button and keeps aria-expanded correct for screen readers.

const toggleMobileMenu = () => {
  const isOpen = selectOne("#main-nav").classList.toggle("open");
  selectOne("#menu-button").setAttribute("aria-expanded", String(isOpen));
};
