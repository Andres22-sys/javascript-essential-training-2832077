//create a class for the lunchbox object type
// import LunchBox from "./Lunchbox.js";

import LunchBox from "./Lunchbox.js";

const lunchbox1 = new LunchBox(
    "Lunchbox1",
    "blue",
    10,
    2,
    10,
    10,
    false
);

console.log("The lunchbox1 object:", lunchbox1);
console.log("The pocketNum value:", lunchbox1.pocketNum);

const lunchbox2 = new LunchBox(
    "Lunchbox2",
    "red",
    5,
    1,
    5,
    5,
    true
);

console.log("The lunchbox2 object:", lunchbox2);
console.log("The pocketNum value:", lunchbox2.pocketNum);

const lunchbox3 = new LunchBox(
    "Lunchbox3",
    "green",
    15,
    3,
    15,
    15,
    false
);

console.log("The lunchbox3 object:", lunchbox3);
console.log("The pocketNum value:", lunchbox3.pocketNum);