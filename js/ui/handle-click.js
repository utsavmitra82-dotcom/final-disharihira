// ONE click listener for the whole page (event delegation). It reads data-* attributes to decide what to do.

const handleDocumentClick = (clickEvent) => {
  const clickedElement = clickEvent.target;
  const enquiryButton = clickedElement.closest("[data-enquire]");        // "Enquire now" / "Build something similar"
  const projectCard = clickedElement.closest("[data-project-index]");    // a project card
  const categoryChip = clickedElement.closest("[data-category]");        // a filter chip

  if (enquiryButton) { closeProjectModal(); scrollToContact(); }
  else if (projectCard) openProjectModal(Number(projectCard.dataset.projectIndex));
  else if (categoryChip) {
    appState.activeProjectCategory = categoryChip.dataset.category;
    renderCategoryChips();
    renderProjects();
  } else if (clickedElement === selectOne("#project-modal") || clickedElement.closest("#modal-close-button")) closeProjectModal(); // dark overlay or × button

  if (clickedElement.closest("#main-nav a")) closeMobileMenu(); // phone menu link tapped
};
