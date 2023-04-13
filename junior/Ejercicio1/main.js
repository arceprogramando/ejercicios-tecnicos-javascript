/**
 * Encuentra el número más grande de un array.
 * @param {number[]} array - El array de números.
 * @returns {number} - El número más grande del array.
 */


function encontrarMaximo(array) {
    if (!Array.isArray(array)) {
        console.log("El parámetro debe ser un array");
        return;
    }

    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

console.log(encontrarMaximo([9, 5, 6, 10, 15, 2, 4]));

/*Para encontrar el número más grande en un array
creamos una función llamada encontrarMaximo, la cual recibe como parámetro un array de números.
Antes de empezar, verificamos si el parámetro recibido es un array usando el método isArray de JavaScript.
Si no es un array, mostramos un mensaje en la consola y retornamos sin hacer nada más.
Si el parámetro es un array, inicializamos la variable max con el primer elemento del array recibido.
Luego, iniciamos un bucle for en el que recorremos todos los elementos del array excepto el primero,
ya que ya lo hemos inicializado en la variable max. En cada iteración del bucle,
comparamos el elemento actual del array con el valor almacenado en la variable max.
Si el elemento actual es mayor que el valor de max, actualizamos el valor de max con el elemento actual.
Finalmente, cuando hemos recorrido todos los elementos del array, retornamos el valor almacenado en max, que será el número más grande del array.
*/