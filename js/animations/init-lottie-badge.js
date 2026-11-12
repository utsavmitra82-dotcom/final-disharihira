// Plays the looping navy + yellow spinning squares behind the "15+" badge with lottie-web.

const initLottieBadge = () => {
  if (!window.lottie) return;
  const navyColor = [0.04, 0.18, 0.4, 1];
  const yellowColor = [0.96, 0.72, 0, 1];
  lottie.loadAnimation({
    container: selectOne("#lottie-badge"), renderer: "svg", loop: true, autoplay: true,
    animationData: { v: "5.7.0", fr: 30, ip: 0, op: 120, w: 200, h: 200,
      layers: [createLottieLayer(1, 120, navyColor, -1), createLottieLayer(2, 150, yellowColor, 1)] },
  });
};
