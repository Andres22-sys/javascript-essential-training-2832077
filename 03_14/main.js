import Book from "./Book";

const book1 = new Book(
    "The Hobbit",
    "J.R.R. Tolkien",
    295,
    "Allen & Unwin",
    "21 September 1937",
    "Fantasy",
    "English",
    "United Kingdom",
    ["Bilbo Baggins", "Gandalf", "Thorin Oakenshield", "Gollum"],
);

console.log("The book1 object:", book1);
console.log("The title value:", book1.title);
console.log("Days since published:", book1.bookAge());

const book2 = new Book(
    "The Lord of the Rings",
    "J.R.R. Tolkien",
    1216,
    "Allen & Unwin",
    "29 July 1954",
    "Fantasy",
    "English",
    "United Kingdom",
    ["Frodo Baggins", "Gandalf", "Aragorn", "Gollum"],
);

console.log("The book2 object:", book2);
console.log("The title value:", book2.title);
console.log("Days since published:", book2.bookAge());

const book3 = new Book(
    "The Silmarillion",
    "J.R.R. Tolkien",
    429,
    "Allen & Unwin",
    "15 October 1977",
    "Fantasy",
    "English",
    "United Kingdom",
    ["Morgoth", "Melkor", "Ulmo", "Manwe"],
);

console.log("The book3 object:", book3);
console.log("The title value:", book3.title);

const book4 = new Book(
    "The Children of Húrin",
    "J.R.R. Tolkien",
    352,
    "Allen & Unwin",
    "20 October 2007",
    "Fantasy",
    "English",
    "United Kingdom",
    ["Húrin", "Turin", "Nienor", "Túrin"],
);

console.log("The book4 object:", book4);
console.log("The title value:", book4.title);

const book5 = new Book(
    "The Fall of Gondolin",
    "J.R.R. Tolkien",
    288,
    "Allen & Unwin",
    "20 October 2008",
    "Fantasy",
    "English",
    "United Kingdom",
    ["Turgon", "Tuor", "Eärendil", "Melian"],
);

console.log("The book5 object:", book5);
console.log("The title value:", book5.title);
