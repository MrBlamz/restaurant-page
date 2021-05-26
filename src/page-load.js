import createNavbar from "./navbar";
import createSocialContainer from "./social";
import createHome from "./home";
import createMenu from "./menu";

export function loadPage(container) {
  container.append(createNavbar(), createMenu(), createSocialContainer());
}
