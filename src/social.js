function createSocial() {
  // Creates a container to hold social media info
  const socialContainer = document.createElement("div");
  socialContainer.classList.add("social");

  // Creates an ul element to hold li links
  const ul = document.createElement("ul");

  function createSocialElement(src) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");

    img.src = src;

    a.appendChild(img);
    li.appendChild(a);

    return li;
  }

  const facebook = createSocialElement("icons/facebook.png");
  const twitter = createSocialElement("icons/twitter.png");
  const instagram = createSocialElement("icons/instagram-logo.png");

  // Adds links to ul
  ul.append(facebook, twitter, instagram);

  // Adds ul to social container
  socialContainer.appendChild(ul);

  return socialContainer;
}

export default createSocial;
