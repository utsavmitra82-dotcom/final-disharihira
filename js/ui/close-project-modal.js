// Hides the project pop-up and lets the page scroll again.

const closeProjectModal = () => {
  selectOne("#project-modal").hidden = true;
  document.body.style.overflow = "";
};
