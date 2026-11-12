// ENTRY POINT (loaded LAST, after every function file): connects all the functions in the right order.

// 1) Put the content on the page
renderServices();
renderSteps();
renderReviews();
renderCategoryChips();
renderProjects();

// 2) Connect the interactions
document.addEventListener("click", handleDocumentClick);
document.addEventListener("keydown", handleEscapeKey);
selectOne("#menu-button").addEventListener("click", toggleMobileMenu);

// 3) Start the animations (after the content exists, so AOS/Swiper can find it)
initCounters();
initScrollReveal();
initNavIntro();
initLottieBadge();
initReviewsSlider();
