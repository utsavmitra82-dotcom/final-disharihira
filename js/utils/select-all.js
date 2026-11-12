// Returns ALL elements matching a CSS selector as a real array (so .map/.forEach work).
const selectAll = (cssSelector, parentElement = document) => [...parentElement.querySelectorAll(cssSelector)];
