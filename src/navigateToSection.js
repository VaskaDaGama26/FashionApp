const navigateToSection = (navigate, location, setPendingScroll, sectionId) => {
  if (location && location.pathname !== "/") {
    // Set the section to scroll to after navigating
    setPendingScroll(sectionId);
    // Navigate to the homepage
    navigate("/");
  } else {
    // Scroll directly to the section if already on the homepage
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export default navigateToSection;
