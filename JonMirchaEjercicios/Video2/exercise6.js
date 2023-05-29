//Write a function to count the number of times a word is repeated in a long text, e.g. myFunction
//("hello world goodbye world", "world") will return 2.

const countWords = (string = "", word = "") => {
    if (!string) return console.error("You did not enter a text");
    if (!word) return console.error("You did not enter a word");

    const regex = new RegExp(`\\b${word}\\b`, "gi");
    const matches = string.match(regex);

    return matches ? matches.length : 0;
};

// Example usage:
const text = "hello world goodbye world";
const word = "world";
const count = countWords(text, word);
console.log(count); // Output: 2