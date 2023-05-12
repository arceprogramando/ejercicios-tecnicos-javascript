// Write a function that reverses the words in a string,
//e.g.myFunction("Hello World") will return "dlroW olleH".


// My Solution
const reverseWords = (text = "") => {
    return text.split('').reverse().join('');

    // The split() method splits a String object into an array (vector) of strings by separating the string into substrings.
    // the reverse() method reverses the order of the elements in an array in place. The first element becomes the last and the last becomes the first.
    //The join() method joins all elements of an array (or array-like object) into a string and returns this string.
}

console.log(reverseWords("Hello"))

// Solution jon mircha
const invertirCadena = (cadena = "") =>
    (!cadena)
        ? console.error("No ingresaste una cadena de texto")
        : console.log(cadena.split("").reverse().join(""));


invertirCadena();
invertirCadena("Hola mundo");
invertirCadena("Javascript es un lenguaje de programacion increible")