import createNavbar from "./navbar";
import createSocialContainer from "./social";
import createHome from "./home";

export function loadPage(container) {
  container.append(createNavbar(), createHome(), createSocialContainer());
}
