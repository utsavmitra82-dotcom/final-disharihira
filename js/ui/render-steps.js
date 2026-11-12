// Fills the "How it works" section with the numbered process steps.

const renderSteps = () => {
  selectOne("#steps-grid").innerHTML = processSteps
    .map(([title, description]) => `<div class="card step" data-aos="fade-up"><h3>${title}</h3><p>${description}</p></div>`)
    .join("");
};
