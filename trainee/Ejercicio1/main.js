alert("Esto es una Alerta. Dale a aceptar y abre la consola con F12"); // Puedes eliminar esta línea si lo deseas

/*
Ejercicio 1 

Suma de dos números: Escribe una función que tome dos números
como argumentos y devuelva su suma.

*/

function sumarNumeros(numero1, numero2) {
  if (typeof numero1 !== "number" || typeof numero2 !== "number") {
    console.log("Error: Uno o ambos argumentos no son números");
  } else {
    resultado = numero1 + numero2;
    console.log(`El resultado es ${resultado}`);
  }
}

sumarNumeros(1, 2); // El resultado es 3
sumarNumeros(1, "a"); // Error: Uno o ambos argumentos no son números

/*   En este ejercicio se crea una funcion sumarNumeros que va a recibir dos valores 
"numero1,numero2 {
    si el tipo de elemento que es numero1 es diferente a "number"(que no es un numero) o
    el tipo de elemento numero 2 es diferente a "number" mostrar por consola el error de uno 
    o ambos arguemntos no son numeros
        sino 
        guardar en resultado la suma de numero 1 + numero 2
        despues
        mostrar por consola "el resultado es ${ variable resultado}"
}
*/
