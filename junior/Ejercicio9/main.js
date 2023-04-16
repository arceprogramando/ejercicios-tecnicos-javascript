/**
 * Cuenta el número de caracteres de una cadena de texto.
 * @param {string} texto - El texto del cual contar los caracteres.
 * @param {string} [caracter] - El caracter específico que se desea contar. Si no se proporciona, se cuenta la longitud total del texto.
 * @returns {number} - El número de caracteres en la cadena de texto, o el número de veces que aparece el caracter especificado.
 */


function contarTexto(texto, caracter) {
    if (typeof texto !== "string") {
        console.log("Lo ingresado no es un texto")
        return 0;
    }

    if (!caracter) {
        return texto.length
    }

    let count = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) {
            count++;
        }
    }
    return count
}
console.log(contarTexto("Hola Mundo")); // 10
console.log(contarTexto("Hola Mundo", "o")); // 2
console.log(contarTexto(123));

/*Creamos una funcion contarTexto a la cual va a recibir dos parametros , texto y caracter,
una validacion si el tipo de texto es diferente a string , va salir por consola , lo ingresado no es un texto y retorna 0
otra validacion si caracter esta vacio retorna el tamaño del texto

despues inicializamos un contador en 0 
donde iniciamos un bucle for en el cual inicializamos la iteracion en 0, hasta que y deje de ser menor al tamaño de el total de texto
va a dar una vuelta al bucle y sumar 1 , dentro de este bucle 
hacemos que si texto en el indice que se encuentra es igual a caracter
hacemos contador++ , para comentar cuantos caracteres tiene el texto
despues retornamos el contador

*/