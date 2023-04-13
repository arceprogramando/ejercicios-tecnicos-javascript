/**
 * Devuelve el primer elemento de un array.
 * @param {Array} arr - El array del que se quiere obtener el primer elemento.
 * @returns {*} - El primer elemento del array.
 */

function primerElemento(array) {
    if (!Array.isArray(array)) {
        console.log("El parámetro debe ser un array");
        return;
    }

    return array[0];
}

console.log(primerElemento([10, 4, 56, 6, 3, 2]))

/*La funcion primerElemento array va a recibir un array en el cual
se invierte array ,para preguntar si es un array el elemento recibido,
como va ser verdadero si no es un array pasa por el console.log(el parametro
debe ser un array) y retorna a finalizar la funcion 
si pasa esta validacion de forma de continuar la funcion , va a retornar
el elemento traido , osea array en su index 0 , que seria el primer valor
    
despues hacemos un console.log(donde pasamos la funcion y el array)
    */