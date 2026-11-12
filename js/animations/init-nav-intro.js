// GSAP intro: the text links in the header slide down and fade in one after another.
// The "Contact Us" button (.btn) is skipped on purpose: it has a CSS transition that fights GSAP,
// which made it show for a moment, vanish, then come back. clearProps removes GSAP's inline styles afterwards.
const initNavIntro = () => {
  if (!window.gsap) return;
  gsap.from(".links a:not(.btn)", { y: -12, opacity: 0, stagger: 0.08, duration: 0.6, clearProps: "all" });
};
