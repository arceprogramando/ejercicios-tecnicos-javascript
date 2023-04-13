/**
* Determina si un número es par o impar.
 * @param {number} numero - El número a evaluar.
 * @returns {string} "par" si el número es par, "impar" si es impar.
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

/* En este ejercicio se crea una funcion flecha ParOImpar en la cual se le pide un numero
    en la primera validacion si el tipo de numero es diferente a a number pasara directamente a decirme
que el valor no corresponde a un numero 
    en la segunda validacion se verifica si numero es menor a 0 , si lo es avisa que no se puede ingresar
numeros menores a 0
    en la tercera validacion recien se resuelve el proceso en el cual se verifica si numero es par o impar
    si numero resto 2 es igual a cero se muestra por consola que es par, si no es impar
*/
