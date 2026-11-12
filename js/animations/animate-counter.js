// Counts one number up from 0 with GSAP (e.g. 0 → 120+). Falls back to the final number if GSAP is missing.
// counterElement: the element whose data-count-to attribute holds the target number.
const animateCounter = (counterElement) => {
  const targetNumber = Number(counterElement.dataset.countTo);
  if (!window.gsap) { counterElement.textContent = `${targetNumber}+`; return; }
  const counterValue = { current: 0 }; // object GSAP animates
  gsap.to(counterValue, {
    current: targetNumber, duration: 1.6, ease: "power2.out",
    onUpdate: () => { counterElement.textContent = `${Math.round(counterValue.current)}+`; },
  });
};
