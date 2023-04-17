/**
 * Calcula el cuadrado y el cubo de un número.
 *
 * @param {number} numero - El número para el que se desea calcular el cuadrado y el cubo.
 * @returns {Object} - Un objeto con las propiedades "cuadrado" y "cubo", que contienen el resultado correspondiente.
 *                     El valor de "cuadrado" es el resultado de elevar el número al cuadrado, mientras que el valor de "cubo" 
 *                     es el resultado de elevar el número al cubo.
 * @throws {Error} - Si el argumento pasado no es un número.
 */


function cuadradoYCubo(numero) {

    if (typeof numero !== "number" || isNaN(numero)) {
        throw new Error("El argumento debe ser un número válido");
    }

    const cuadrado = Math.pow(numero, 2);
    const cubo = Math.pow(numero, 3);

    return { cuadrado, cubo };
}

console.log(cuadradoYCubo(35))

/* Para hacer el ejercicio de hacer el Cuadrado y Cubo de un numero creamos
la funcion cuadradoYCubo la cual va a recibir un numero
si el tipo de numero es diferente a number o si numero es un Not a Number
enviaremos un throw new Error para que pueda ser manipulado a futuro en el cual
dira el arguemnto debe ser un numero valido 
despues de esa validacion creamos una constante cuadrado en la cual guardamos
la informacion de el uso de el objeto global Math de javascript en la cual usamos el
elemento pow que lo que hace es poder de nuestro numero elevar su potencia segun el parametro que 
le pasemos , en cuadrado lo hicimos x2 potencia y en cubo x3 
retornamos un objeto con cuadrado y cubo que va a poder ser manipulado a futuro 

*/