/**
 * Hallar la superficie de un cuadrado conociendo el valor de un lado.
 *
 * @param {number} lado - El lado conocido.
 * @returns {number} - La superficie de los lados.
 */


function superficieCuadrado(lado) {
    if (isNaN(lado)) {
        throw new Error("El lado no es un número");
    }

    const superficie = lado * lado;

    return superficie;
}

console.log(superficieCuadrado(35));
console.log(superficieCuadrado("35"));

/*Para resolver este ejercicio de dar la superficie del Cuadrado creamos una funcion
SuperficieCuadrado que recibira el valor del lado conocido 
vamos a pasar a hacer una validacion en la cual si lado es Nan (Not a Number) va a utilizar el retornar un throw new error 
en el cual envia ("El lado no es un numero") este va a poder ser manejado a futuro con try catch , lo vemos mas adelante.
creamos nuestro ejercicio en el cual creamos nuestro ejercicio en el cual segun la matematica la superficie de un 
espacio se saca multiplicando los lados, despues retornamos superficie

*/