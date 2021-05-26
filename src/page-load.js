import createNavbar from "./navbar";
import createSocial from "./social";

function loadPage(element) {
  const container = document.getElementById("content");
  const section = container.querySelector("section");

  if (section) {
    section.replaceWith(element);
    return;
  }

  container.append(createNavbar(), element, createSocial());
}

export default loadPage;
