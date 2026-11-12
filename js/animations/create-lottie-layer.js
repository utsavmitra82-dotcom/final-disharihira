// Builds ONE spinning rounded-square layer (Lottie JSON) for the hero badge.
// layerIndex: layer id; squareSize: side length; strokeColor: [r,g,b,a] from 0 to 1; spinDirection: 1 clockwise, -1 anticlockwise.
const createLottieLayer = (layerIndex, squareSize, strokeColor, spinDirection) => ({
  ty: 4, ind: layerIndex, ip: 0, op: 120, st: 0,
  ks: {
    o: { a: 0, k: 100 },
    r: { a: 1, k: [ // rotation animates from 45° to 45° + one full turn
      { t: 0, s: [45], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
      { t: 120, s: [45 + 360 * spinDirection] },
    ] },
    p: { a: 0, k: [100, 100, 0] }, a: { a: 0, k: [0, 0, 0] }, s: { a: 0, k: [100, 100, 100] },
  },
  shapes: [{ ty: "gr", it: [
    { ty: "rc", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [squareSize, squareSize] }, r: { a: 0, k: 10 } },
    { ty: "st", c: { a: 0, k: strokeColor }, o: { a: 0, k: 100 }, w: { a: 0, k: 7 } },
    { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
  ] }],
});
