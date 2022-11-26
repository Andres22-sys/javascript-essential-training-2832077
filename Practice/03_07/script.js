/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested 
 * object.
 * - Test your objects in the browser console by accessing the entire 
 * object and its specific properties.
 */

//Create an object for a piano
const piano = {
  name: "Yamaha U1",
  color: "black",
  keys: 88,
  pedals: 3,
  length: {
    width: 5,
    height: 5,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newLength: function (newLength) {
    this.length = newLength;
  },
};

console.log("The piano object:", piano);
console.log("The keys value:", piano.keys);
console.log("The height value:", piano.length.height);

//create an object for a book
const book = {
  name: "The Great Gatsby",
  pages: 180,
  themes: ["wealth", "love", "loss"],
  open: false,
  readBook: false,
  toggleOpen: function (openStatus) {
    this.open = openStatus;
  },
  readBook: function (readStatus) {
    this.read = readStatus;
  }
};

console.log("The book object:", book);
console.log("The pages value:", book.pages);
console.log("The themes value:", book.themes);
