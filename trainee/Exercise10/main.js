// Exercise 10

/*Reverses a text string. */

const reverseString = (phrase) => {
    if (typeof phrase !== "string") {
        console.log(`The value of ${phrase} is a not valid value`);
        return
    }

    let result = ""
    for (let i = phrase.length - 1; i >= 0; i--) {
        result += phrase[i];
    }
    return result;
}

console.log(reverseString("Volar"));
console.log(reverseString("Huevos"));

/*  This is an arrow function that takes in a string argument.
If the type of phrase is not a string, it logs a message indicating
that the value of phrase is not a valid value and returns.
If the validation is correct, a variable named result is created
and initialized to an empty string.
Then a for loop is created that iterates through the phrase array.
It starts by initializing i to the length of the phrase - 1,
which is a solution to the .length method initialized at 0.
Then i decrements by 1 until it reaches 0.
Inside the loop, the character at the current index of phrase is
appended to the result variable.
*/
