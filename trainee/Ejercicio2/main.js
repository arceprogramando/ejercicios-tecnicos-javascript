alert(
  "Esta Alerta sera quitada en la proxima actividad, recuerda usar f12 para inspeccionar tu consola"
); // Puedes eliminar esta línea si lo deseas

/**
 * Divide dos números y devuelve el resultado.
 * @param {number} numero1 El dividendo.
 * @param {number} numero2 El divisor.
 * @returns {number} El resultado de la división.
 * @throws {Error} Si uno o ambos argumentos no son números, o si el divisor es cero o negativo.
 */
/*


Esto un comentario que sirve para documentar la función y especificar el tipo de datos que se espera que se pasen como argumentos y lo que se espera que la función devuelva. Esto se conoce como "documentación de código" o "comentarios de documentación". Es útil para los desarrolladores que puedan leer y entender rápidamente cómo se debe utilizar la función sin tener que revisar el código fuente de la función. Desde ahora en mas voy a publicar mis archivos con estos coemntarios para que puedan entenderlo mejor

Ejercicio 2

División de dos números: Escribe una función que tome dos números como argumentos y devuelva su 
división. Asegúrate de manejar el caso en que el segundo número sea cero.


*/

function dividirNumeros(numero1, numero2) {
  if (numero2 <= 0) {
    console.log("El numero 2 no puede ser 0 o menos que cero");
  } else {
    if (typeof numero1 !== "number" || typeof numero2 !== "number") {
      console.log("Error: Uno o ambos argumentos no son numeros");
    } else {
      resultado = numero1 / numero2;
      console.log(`El resultado es ${resultado}`);
    }
  }
}

dividirNumeros(1, 2);
dividirNumeros(30, 0);
dividirNumeros(30, -5);
dividirNumeros(30, "a");

/*En este ejercicio se pide una funcion dividirNumeros , que va llegarle dos numeros , numero1 y numero2 
si numero 2 es menor o igual a 0 se mostrara por consola el numero 2 no puede ser 0 o menos que cero
    sino
    si el tipo de valor de numero 1 es diferente a number o el tipo de valor numero2 es diferente a number
    se muestra por consola el error en que uno o ambos argumentos no son numeros
        sino
        se guarda en resultado la division entre numero1 y numero2
        terminando mostrando por consola el resultado es y el resultado.
    */
