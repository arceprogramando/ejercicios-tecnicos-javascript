// Write a function that returns the text with the characters indicated in the parameter

// Solution Jon mircha

const cropText = (textString = "", length = undefined) => {
    (!textString)
        ? console.error("you did not enter a text string.")
        : (length === undefined)
            ? console.error("you did not enter the length to trim the text")
            : console.log(textString.slice(0, length))
}

cropText("Hello World", 5);
cropText();
cropText("Hello Hello");
cropText("", 5)
