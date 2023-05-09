// Write a function that counts the number of characters in a string, eg myFunction("Hello World") will return 10


// Mi solucion
const returnAmountString = (text) => {
    if (!(typeof text === "string")) {
        return console.error("the parameter joined is not a text")
    }

    return text.length
}

console.log(returnAmountString("hola Mundo"))
// End my solution



// Solution Jon mircha
function contarCaracteres(cadena = "") {
    //Si el usuario no le manda nada , le asigna un string vacio
    if (!cadena) {
        console.error("No ingresaste ninguna cadena");
    } else {
        console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
    }
}

contarCaracteres();
contarCaracteres("Hola Mundo");
// End Solution Jon mircha

// Solution jon mircha with arrow function

const arrowContarCaracteres = (cadena = "") =>
    (!cadena)
        ? console.error("No ingresaste ninguna cadena")
        : console.log(`La cadena "${cadena} y tiene ${cadena.length} caracteres"`)