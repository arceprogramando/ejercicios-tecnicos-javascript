//Crear una función que reciba un array de números y devuelva la suma de todos ellos.
/**
 * Función que recibe un array de números y devuelve la suma de todos ellos.
 * @param {Array} numeros - El array de números a sumar.
 * @returns {Number} La suma de los números del array.
 */

const sumaArray = (numeros) => {

    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma;
}

console.log(sumaArray([10, 3, 5, 4, 5]))

/* Actualmente vamos a a pasar a mostrar nuestras respuestas 
a travez de el console.log a la hora de usar la funcion
ya que si lo hacemos dentro de la funcion console.log va a
retornar undefined
En JavaScript, console.log() es una función que imprime un mensaje 
en la consola del navegador o del entorno de ejecución de JavaScript. 
Al utilizar console.log() dentro de una función, como en el ejemplo dado,
se imprimirá el valor deseado en la consola, pero la función en sí misma 
no devuelve nada (es decir, devuelve undefined).
Por lo tanto, si queremos obtener el resultado de la suma de un array de 
números utilizando la función sumaArray(), es mejor devolver el valor de 
la suma utilizando la palabra clave return en lugar de imprimirlo en la 
consola utilizando console.log(), para que podamos asignar el valor de 
retorno de la función a una variable y utilizarlo posteriormente en el código.
*/