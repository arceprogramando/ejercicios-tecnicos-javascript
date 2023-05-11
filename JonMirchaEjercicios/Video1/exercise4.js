/*
Program a function that repeats a text X times, myFunction('Hello world', 3) 
will return Hello world Hello world Hello world.
 */

// My function

const repeatString = (textString = "", quantity = undefined) => {
    if (!textString) {
        console.error("You did not enter a text string.");
        return;
    }
    if (quantity === undefined) {
        console.error("You didn't enter the quantity to repeat");
        return;
    }

    let result = "";
    for (let i = 0; i < quantity; i++) {
        result += textString + " " + (i + 1) + " ";
    }
    return result;
}

console.log(repeatString("Hola mundo", 3))

// Function jon mircha

const repeatText = (text = "", times = undefined) => {
    if (!text) return console.error("You did not enter a text");

    if (times === undefined) return console.error("You did not enter the number of times to repeat the text");

    if (times === 0) return console.error("Times cannot be zero");

    if (Math.sign(times) === -1) return console.error("The times number cannot be negative");

    for (let i = 1; i <= times; i++) {
        console.log(`${text}, ${i}`);
    }
}

repeatText("Hello world", 3);