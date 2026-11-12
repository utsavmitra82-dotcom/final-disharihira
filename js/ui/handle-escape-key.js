// Closes the project pop-up when the Esc key is pressed.

const handleEscapeKey = (keyEvent) => {
  if (keyEvent.key === "Escape") closeProjectModal();
};
