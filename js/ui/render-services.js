// Fills the Services section with one card per service from sample-data.
// Each "Enquire now" button carries data-enquire so handle-click.js can detect it.

const renderServices = () => {
  selectOne("#services-grid").innerHTML = servicesList
    .map(([icon, title, description], cardNumber) => `
      <div class="card" data-aos="fade-up" style="transition-delay:${cardNumber * 70}ms">
        <div class="ico">${icon}</div><h3>${title}</h3><p>${description}</p>
        <button class="btn o" data-enquire>Enquire now →</button>
      </div>`)
    .join("");
};
