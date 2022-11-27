/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

// Build an array with 8 items from a house
let house = ["bed", "chair", "table", "lamp", "sofa", "tv", "fridge", "oven"];
console.log("Starting Array:", house);

// Remove the last item and print the array
house.pop();
console.log("Last item: ", house);

// Add the last item as the first item on the array
house.unshift("oven");
console.log("First item: ", house);

// Sort the items by alphabetical order
house.sort();
console.log("Alphabetic Order: ", house);

// Use the find() method to find a specific item in the array
let findItem = house.find(function (item) {
    if (item === "lamp") {
        return item;
    }
    });
console.log("Find method: ", findItem);

// Remove the item you found using the find method from the array.
house.splice(house.indexOf(findItem), 1);
console.log("Last item removed: ", house);



