import loadPage from "./page-load";
import createHome from "./home";
import createMenu from "./menu";
import createContacts from "./contacts";

function highlightLink(links, selected) {
  links.forEach((link) => link.classList.remove("active"));
  selected.classList.add("active");
}

function switchTab() {
  switch (this.textContent) {
    case "Home":
      loadPage(createHome());
      break;
    case "Menu":
      loadPage(createMenu());
      break;
    case "Contacts":
      loadPage(createContacts());
      break;
    default:
      break;
  }
}

// Loaded on startup
loadPage(createHome());

const navLinks = document.querySelectorAll(".navbar a");

// Navbar links event listeners
navLinks.forEach((link) => {
  link.addEventListener("click", switchTab);
  link.addEventListener("click", () => {
    highlightLink(navLinks, link);
  });
});
