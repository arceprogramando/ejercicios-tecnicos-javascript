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
Ejercicio 3

Promedio de tres números: Escribe una función que tome tres números como argumentos y devuelva su promedio.
*/

function calcularPromedio(num1, num2, num3) {
  if (typeof num1 !== "number") {
    console.error("Error: El primer argumento no es un número");
    return null;
  }

  if (typeof num2 !== "number") {
    console.error("Error: El segundo argumento no es un número");
    return null;
  }

  if (typeof num3 !== "number") {
    console.error("Error: El tercer argumento no es un número");
    return null;
  }

  const promedio = console.log((num1 + num2 + num3) / 3);

  return promedio;
}

calcularPromedio(1, 2, 3);
calcularPromedio(1, 3);
calcularPromedio(1, 3);
calcularPromedio(1, 3, "");
calcularPromedio(1, "", "");

/* En este ejercicio se pide calcular el promedio de tres numeros, en donde se van a pedir el numero1, el numero 2 y el numero3
si el tipo de numero1 o el tipo de numero 2 o el tipo de numero 3 son diferentes de  el type = numero se  va a  crear una instancia 
que maneje los errores  throw new Error se utiliza para lanzar una excepción o error. Cuando se lanza una excepción, la ejecución del
programa se detiene y se busca el primer bloque try-catch que pueda manejar la excepción. Si no se encuentra ningún bloque try-catch,
el programa se detiene y se muestra un mensaje de error. Por lo tanto, throw new Error es una forma de manejar los errores y 
excepciones en JavaScript, actualmente al finalizar tenemos nuestro try catch funcional.*/
