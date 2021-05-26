import createNavbar from "./navbar";
import createSocialContainer from "./social";
import createHome from "./home";
import createMenu from "./menu";
import createContacts from "./contacts";

export function loadPage(container) {
  container.append(createNavbar(), createContacts(), createSocialContainer());
}
