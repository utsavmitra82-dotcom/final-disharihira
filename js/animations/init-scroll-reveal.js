// AOS (Animate On Scroll): reveals elements with data-aos. If AOS failed to load, show them instantly.

const initScrollReveal = () => {
  if (window.AOS) AOS.init({ once: true, duration: 700 });
  else selectAll("[data-aos]").forEach((element) => element.classList.add("aos-animate"));
};
