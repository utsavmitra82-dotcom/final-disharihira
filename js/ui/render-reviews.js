// Builds the testimonial slides that the Swiper slider (init-reviews-slider.js) will animate.

const renderReviews = () => {
  selectOne("#reviews-wrapper").innerHTML = clientReviews
    .map(([quote, clientName]) => `<div class="swiper-slide"><div class="q">“${quote}”<b>${clientName}</b></div></div>`)
    .join("");
};
