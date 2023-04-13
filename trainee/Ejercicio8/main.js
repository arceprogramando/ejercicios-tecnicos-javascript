/*
Crear una función que reciba dos arrays y devuelva un nuevo array que 
contenga los elementos en común de ambos.

*/
/**
 * Función que recibe dos arrays y devuelve un nuevo array con los elementos en común de ambos.
 * @param {Array} arr1 - El primer array.
 * @param {Array} arr2 - El segundo array.
 * @returns {Array} El nuevo array con los elementos en común de ambos.
 */


const unionDeArray = (array1, array2) => {
    let result = []

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                if (!result.includes(array1[i])) {
                    result.push(array1[i]);
                }
            }
        }
    }
    return result
}

console.log(unionDeArray([1, 2, 3, 4, 5, 6], [2, 4, 7, 8, 9]))

/*En este ejercicicio se crea una funcion flecha que va a recibir dos arrays
se inicializa el resultado que va a contener un array nuevo
se decide utilizar un bucle for para inicializar i en 0, se ve la cantidad de longitud de largo
del array ,y con el i++ se recorre en +1 por cada vuelta el i 
tambien dentro de ese for se hace el mismo proceso en j , inicializacion, longitud , sumatoria,
despues se hace un if en el cual segun la igualdad entre el idex del array1[posicion del index de i] y array2[posicion del index de j]  y si esto es verdadero ,pasa al siguiente if en el cual  se utiliza para verificar si el elemento en común entre ambos arrays ya fue agregado al resultado o no. Si aún no se ha agregado, entonces se agrega utilizando el método push y luego se pasa al siguiente elemento. Esto es necesario para evitar agregar elementos duplicados al resultado. La función includes se utiliza para verificar si el elemento ya está presente en el resultado. Si el elemento ya está en el resultado, no se agrega de nuevo.
 */
