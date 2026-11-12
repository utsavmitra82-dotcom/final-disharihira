// Draws a small decorative skyline (yellow + navy buildings) used as each project's picture.
// projectIndex: makes every project get a different, but always the same, skyline.
const buildSkylineSvg = (projectIndex) => {
  let buildingsMarkup = ""; // SVG <rect> pieces added one by one
  let leftPosition = 10;    // x position of the next building
  for (let buildingNumber = 0; buildingNumber < 9; buildingNumber++) {
    const buildingHeight = 40 + ((projectIndex * 37 + buildingNumber * 53) % 70);
    const isYellow = buildingNumber % 2 === 1;
    buildingsMarkup += `<rect x="${leftPosition}" y="${150 - buildingHeight}" width="30" height="${buildingHeight}" fill="${isYellow ? "#F5B700" : "#0B2F66"}" opacity="${isYellow ? 0.9 : 0.8}"/>`;
    leftPosition += 36;
  }
  return `<svg viewBox="0 0 340 150" preserveAspectRatio="xMidYMax slice" aria-hidden="true">${buildingsMarkup}</svg>`;
};
