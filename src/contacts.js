function createContacts() {
  const contacts = document.createElement("section");
  contacts.classList.add("contacts");

  const phone = createContactItem("Phone", "957 345 654");
  const address = createContactItem(
    "Address",
    "1542 N Cahuenga Blvd, Los Angeles, CA 90028, United States"
  );
  const email = createContactItem("Email", "gourmet_buffet@the_best.com");

  contacts.append(phone, address, email);
  return contacts;
}

function createContactItem(header, text) {
  const container = document.createElement("div");
  container.classList.add("animate__animated", "animate__rotateInUpRight");

  const h2 = document.createElement("h2");
  h2.textContent = header;

  const p = document.createElement("p");
  p.textContent = text;

  container.append(h2, p);

  return container;
}

export default createContacts;
