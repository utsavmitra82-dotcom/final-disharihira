// Draws the project cards that match the selected category chip.
// visibleProjects keeps each project's ORIGINAL index so the pop-up opens the right one.

const renderProjects = () => {
  const visibleProjects = projectsList
    .map((project, originalIndex) => ({ project, originalIndex }))
    .filter(({ project }) => appState.activeProjectCategory === "All" || project[1] === appState.activeProjectCategory);

  selectOne("#projects-grid").innerHTML = visibleProjects.length
    ? visibleProjects.map(({ project: [name, category, location, size], originalIndex }) => `
        <button class="card proj" data-project-index="${originalIndex}">
          ${buildSkylineSvg(originalIndex)}
          <div><small>${category} · ${location}</small><h3>${name}</h3><p>${size}</p></div>
        </button>`).join("")
    : "<p>No projects in this category yet.</p>"; // empty-state message
};
