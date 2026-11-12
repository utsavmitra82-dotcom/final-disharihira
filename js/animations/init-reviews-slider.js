// Starts the Swiper testimonial slider: loops, auto-plays every 4.5 s, clickable dots.
const initReviewsSlider = () => {
  if (!window.Swiper) return;
  new Swiper("#reviews-slider", {
    loop: true,
    autoplay: { delay: 4500, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
  });
};
