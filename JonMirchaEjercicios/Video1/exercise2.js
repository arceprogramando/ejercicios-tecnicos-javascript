// Write a function that returns the text with the characters indicated in the parameter

// Solution Jon mircha

const recortarTexto = (cadena = "", longitud = undefined) => {
    (!cadena)
        ? console.error("No ingresaste una cadena de texto.")
        : console.log((cadena.trim()).slice(0, longitud))
}

recortarTexto("Holas mundo", 5)