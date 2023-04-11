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

/* En este ejercicio se pide una funcion que calcule el promedio de tres numeros y los muestre
dentro va a tener pedido con los parametros num1,num2,num3
al comenzar se realiza un if en el cual si el typeof de num1 ,num2,num3 es diferente al tipo number 
muestre el error y retorne null . al finalizar todas las validaciones, creamos la constante promedio 
a la cual se le agrega una muestra en consola en donde se suman los 3 numeros y se lo divide por 3 
esta funcion retorna el promedio donde se guardo ese console.log()
*/
