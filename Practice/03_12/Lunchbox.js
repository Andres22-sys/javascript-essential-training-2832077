/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class LunchBox {
    constructor(
        // Defines parameters:
        name,
        color,
        volume,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen
    ) {
        // Define properties:
        this.name = name;
        this.color = color;
        this.volume = volume;
        this.pocketNum = pocketNum;
        this.strapLength = {
        left: strapLengthL,
        right: strapLengthR,
        };
        this.lidOpen = lidOpen;
    }
    // Add methods like normal functions:
    toggleLid(lidStatus) {
        this.lidOpen = lidStatus;
    }
    newStrapLength(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    }
}

export default LunchBox;
