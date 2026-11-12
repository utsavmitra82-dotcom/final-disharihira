// Starts each stat counter only when it scrolls into view, and only once.

const initCounters = () => {
  const visibilityObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      observer.unobserve(entry.target); // never count twice
    });
  }, { threshold: 0.4 });
  selectAll("[data-count-to]").forEach((counterElement) => visibilityObserver.observe(counterElement));
};
