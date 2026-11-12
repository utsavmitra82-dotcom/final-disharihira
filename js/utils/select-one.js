// Returns the FIRST element matching a CSS selector (shortcut for querySelector).
// cssSelector: e.g. "#main-nav"; parentElement: where to search (whole page by default).
const selectOne = (cssSelector, parentElement = document) => parentElement.querySelector(cssSelector);
