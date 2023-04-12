/**
* Determina si un número es par o impar.
 * @param {number} numero - El número a evaluar.
 * @returns {string} "par" si el número es par, "impar" si es impar.
 */

/*
  Este es un comentario de documentación que describe lo que hace la función, el tipo de datos de los argumentos
  que se esperan y lo que devuelve. Los comentarios de documentación son útiles para que otros desarrolladores
  comprendan rápidamente lo que hace la función sin tener que leer el código fuente completo.
*/



const parOImpar = (numero) => {
    if (typeof numero !== "number") {
        console.log("El valor ingresado no corresponde a un numero")
        return
    }
    if (numero < 0) {
        console.log(`El numero ingresado( ${numero}) no puede ser menor a 0`)
        return
    }

    if (numero % 2 == 0) {
        console.log(`El numero ingresado (${numero}) es par`)
        return
    } else {
        console.log(`El numero ingresado (${numero}) es impar`)
        return
    }
}

parOImpar(30);
parOImpar(-30);
parOImpar("-30");
parOImpar("31");
parOImpar(31);


