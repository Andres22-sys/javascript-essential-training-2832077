/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article 
 * element with data from object
 * - Helper function creates.
 */

const blackJacket = {
  name: "Black Jacket",
  color: "black",
  volume: 10,
  pocketNum: 4,
};

const addPocket = (currentPocket) => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
      <h1>${currentPocket.name}</h1>
      <ul>
        <li>Volume: ${currentPocket.volume}</li>
        <li>Color: ${currentPocket.color}</li>
        <li>Number of pockets: ${currentPocket.pocketNum}</li>
      </ul>
  `;
  return newArticle;
};

const main = document.querySelector("main");
main.append(addPocket(blackJacket));
console.log(addPocket(blackJacket));

