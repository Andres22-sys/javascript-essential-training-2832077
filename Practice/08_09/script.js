/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;


// Create main function
function createBackpack() {
  // Create new <article> element
  const backpack = document.createElement("article");
  // Add class to <article> element
  backpack.classList.add("backpack");
  // Populate <article> with content
  backpack.innerHTML = content;
  // Return <article> element to where function is called
  return backpack;
}

// Create helper image function
function createImage() {
  // Create new <figure> element
  const figure = document.createElement("figure");
  // Add <img> markup pointing to frogpack.image
  figure.innerHTML = `<img src="${frogpack.image}" alt="${frogpack.description}">`;
  // Add <figcaption> element with image description
  figure.innerHTML += `<figcaption>${frogpack.description}</figcaption>`;
  // Return <figure> element to where function is called
  return figure;
}

// Call main function
const backpack = createBackpack();
// Call helper image function
const image = createImage();
// Add <figure> element to <article> element
backpack.appendChild(image);
// Add <article> element to <main> element
document.querySelector("main").appendChild(backpack);

// Path: Practice\08_09\style.css
