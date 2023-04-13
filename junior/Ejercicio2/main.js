/**
 * Muestra el nombre y apellido de una persona a partir de un objeto.
 * @param {object} person - El objeto que contiene el nombre y apellido de la persona.
 */

function encontrarMinimo(array) {
    if (!Array.isArray(array)) {
        console.log("El parámetro debe ser un array");
        return;
    }

    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
}

console.log(encontrarMinimo([9, 5, 6, 10, 15, 2, 4]));

/*Para encontrar el número más grande en un array
creamos una función llamada encontrarMinimo, la cual recibe como parámetro un array de números.
Antes de empezar, verificamos si el parámetro recibido es un array usando el método isArray de JavaScript.
Si no es un array, mostramos un mensaje en la consola y retornamos sin hacer nada más.
Si el parámetro es un array, inicializamos la variable min con el primer elemento del array recibido.
Luego, iniciamos un bucle for en el que recorremos todos los elementos del array excepto el primero,
ya que ya lo hemos inicializado en la variable min. En cada iteración del bucle,
comparamos el elemento actual del array con el valor almacenado en la variable min.
Si el elemento actual es menor que el valor de min, actualizamos el valor de min con el elemento actual.
Finalmente, cuando hemos recorrido todos los elementos del array, retornamos el valor almacenado en min, que será el número más grande del array.
*/