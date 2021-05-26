// Create Home section
function createHome() {
  const home = document.createElement("section");
  home.classList.add("home");

  const textContainer = createText();

  // Adds DOM elements to home
  home.appendChild(textContainer);

  return home;
}

function createText() {
  // Creates a container to hold text content
  const textContainer = document.createElement("div");
  textContainer.classList.add(
    "text-container",
    "animate__animated",
    "animate__bounceInLeft"
  );

  // Creates text elements and set their content
  const h2 = document.createElement("h2");
  h2.textContent = "The best";
  const h3 = document.createElement("h3");
  h3.textContent = "Restaurant in town!";
  const p = document.createElement("p");
  p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
aspernatur praesentium debitis fugit! Dolor, itaque eos ad animi
architecto repudiandae, consectetur quam, maiores soluta rerum
nesciunt perferendis dolorem? Mollitia fugit est corporis temporibus
blanditiis, ratione aut perspiciatis natus accusamus dolore
consequuntur nesciunt similique autem enim et beatae impedit maiores
quisquam.`;

  // Adds text elements to text container
  textContainer.append(h2, h3, p);

  return textContainer;
}

export default createHome;
