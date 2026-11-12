// Draws the filter chips (All / Residential / ...). The chip matching the state gets class "on".

const renderCategoryChips = () => {
  selectOne("#category-chips").innerHTML = projectCategories
    .map((categoryName) => `<button class="chip ${categoryName === appState.activeProjectCategory ? "on" : ""}" data-category="${categoryName}">${categoryName}</button>`)
    .join("");
};
