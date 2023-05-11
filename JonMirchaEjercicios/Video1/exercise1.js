// Write a function that counts the number of characters in a string, eg myFunction("Hello World") will return 10


// Mi solucion
const returnAmountString = (text) => {
    if (!(typeof text === "string")) {
        return console.error("the parameter joined is not a text")
    }

    return text.length
}

console.log(returnAmountString("Hello World"))
// End my solution



// Solution Jon mircha
function countCharacters(textString = "") {
    //Si el usuario no le manda nada , le asigna un string vacio
    if (!textString) {
        console.error("You did not enter any text string");
    } else {
        console.log(`the text string "${textString}" have ${textString.length} characters`);
    }
}

countCharacters();
countCharacters("Hola Mundo");
// End Solution Jon mircha

// Solution jon mircha with arrow function

const arrowcountCharacters = (textString = "") =>
    (!textString)
        ? console.error("You did not enter any text string")
        : console.log(`The text string "${textString}" have ${textString.length} characters"`)