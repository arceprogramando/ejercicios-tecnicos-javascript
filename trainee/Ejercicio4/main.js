/**
 * Divide dos números y devuelve el resultado.
 * @param {number} numero1 Valor 1 a ser promediado.
 * @param {number} numero2 Valor 2 a ser promediado.
 * @param {number} numero3 Valor 3 a ser promediado.
 * @returns {number} El resultado de el promedio de los tres numeros.
 * @throws {Error} Si uno o ambos argumentos no son números, o si el divisor es cero o negativo.
 */

/*
Esto es un comentario que sirve para documentar la función y especificar el tipo de datos que se espera que se pasen como argumentos y lo que se espera que la función devuelva. Esto se conoce como "documentación de código" o "comentarios de documentación". Es útil para los desarrolladores que puedan leer y entender rápidamente cómo se debe utilizar la función sin tener que revisar el código fuente de la función. Desde ahora en adelante, voy a publicar mis archivos con estos comentarios para que puedan entenderlo mejor.
*/

/*
Ejercicio 4

Convertidor de grados Celsius a Fahrenheit: Escribe una función que tome un número (la temperatura en grados
        Celsius) como argumento y devuelva su equivalente en grados Fahrenheit.
*/
function convertirCelsiusAFahrenheit(celsius) {
  if (typeof celsius !== "number") {
    console.log(`El valor ${celsius} ingresado no es valido`)
  }

  let fahrenheit = (celsius * 9) / 5 + 32;

  return fahrenheit.toFixed(2);
}

console.log(convertirCelsiusAFahrenheit(32));
console.log(convertirCelsiusAFahrenheit(32));


/* En efecto, la función convertirCelsiusAFahrenheit recibe un número que
representa una temperatura en grados Celsius y utiliza la fórmula
matemática de conversión a grados Fahrenheit, que es:
fahrenheit = (celsius * 9/5) + 32
La función aplica esta fórmula y devuelve el resultado redondeado a dos decimales utilizando el método toFixed(). Esta función es un ejemplo de cómo se puede utilizar la programación imperativa para resolver un problema matemático sencillo en JavaScript. devolviendolo a 2 decimales
 */