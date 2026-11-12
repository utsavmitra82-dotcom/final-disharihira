// Smoothly scrolls to the Contact section (id="quote"). Used by every "Contact / Enquire" button.

const scrollToContact = () => selectOne("#quote").scrollIntoView({ behavior: "smooth" });
