import navbar from "./navbar";
import createSocialContainer from "./social";
import createHome from "./home";

export function loadPage(container) {
  container.append(navbar, createHome(), createSocialContainer());
}
