// Opens the project details pop-up and locks page scrolling behind it.
// projectIndex: position of the clicked project in projectsList.

const openProjectModal = (projectIndex) => {
  const [name, category, location, size, description] = projectsList[projectIndex];
  selectOne("#project-modal-body").innerHTML = `${buildSkylineSvg(projectIndex)}
    <div><small>${category} · ${location}</small><h3>${name}</h3><p><b>${size}</b></p><p>${description}</p>
    <button class="btn" data-enquire>Build something similar →</button></div>`;
  selectOne("#project-modal").hidden = false;
  document.body.style.overflow = "hidden";
};
