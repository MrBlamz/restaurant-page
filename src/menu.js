function createMenu() {
  const menu = document.createElement("section");
  menu.classList.add("menu");

  const items = createItemContainer();

  menu.appendChild(items);

  return menu;
}

function createItemContainer() {
  const itemsContainer = document.createElement("div");
  itemsContainer.classList.add("items-container");

  const item1 = createMenuItems("Cookies with ice cream", "item1");
  const item2 = createMenuItems("Gourmet Burger", "item2");
  const item3 = createMenuItems("Eggs with greens and bread", "item3");

  itemsContainer.append(item1, item2, item3);
  return itemsContainer;
}

function createMenuItems(text, id) {
  const container = document.createElement("div");
  container.classList.add("item");
  container.id = id;

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("item-img");

  const p = document.createElement("p");
  p.textContent = text;

  container.append(imgContainer, p);

  return container;
}

export default createMenu;
