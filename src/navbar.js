function createNavbar() {
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");

  const logo = document.createElement("span");
  logo.textContent = "Gourmet Buffet";
  logo.classList.add("logo");

  const home = document.createElement("a");
  home.textContent = "Home";
  home.classList.add("active");

  const menu = document.createElement("a");
  menu.textContent = "Menu";

  const contacts = document.createElement("a");
  contacts.textContent = "Contacts";

  navbar.append(logo, home, menu, contacts);

  return navbar;
}

export default createNavbar;
