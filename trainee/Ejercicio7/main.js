//Crear una función que reciba un número y devuelva su cuadrado.

/**
 * Función que recibe un número y devuelve su cuadrado.
 * @param {Number} num - El número a elevar al cuadrado.
 * @returns {Number} El cuadrado del número.
 */


const cuadradoDeUnNumero = (num) => {
    if (num != typeof ("number")) {
        console.log(`El tipo de valor de ${num} no es de un numero`);
        return
    }
    num = num * num
    return num
}

console.log(cuadradoDeUnNumero(20))
console.log(cuadradoDeUnNumero("20"))
