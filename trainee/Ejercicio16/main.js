/**
 *  De un lado del cuadrado posteriormente mostrar el valor del perimetro del mismo
recordar que el perimetro resulta de multiplicar el valor de un lado por 4
 * @param {number} lados - El lado que se va a conocer
 * @returns {perimetro} - perimetro total del cuadrado 
 * @throws {Error} - Si el argumento lados no es un numero 
*/

const perimetro = (lado) => {
    if (isNaN(lado)) {
        throw new Error("El valor ingresado no es un número");
    }
    return lado * 4;
}

console.log(perimetro(4))
console.log(perimetro(32))
