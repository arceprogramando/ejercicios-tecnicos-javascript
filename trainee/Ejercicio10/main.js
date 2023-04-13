/**
Invierte una cadena de texto.
@param {string} cadena - La cadena de texto a invertir.
@returns {string} - La cadena de texto invertida.
*/

function invertirCadena(cadena) {
    if (typeof cadena !== "string") {
        console.log(`El valor ${cadena} no es un valor valido`)
        return
    }
    let resultado = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        resultado += cadena[i];
    }
    return resultado;
}


console.log(invertirCadena("Volar"))
console.log(invertirCadena(3))
console.log(invertirCadena("Huevos"))


/* se crea una funcion invertirCadena en la cual recibe una cadena de tipo string 
si el tipo de la cadena recibida es diferente a string
muestra por consola el valor cadena no es un valor valido y retorna terminando la funcion
inicializamos resultado con una cadena vacia 
inicializamos un bucle for en el cual se inicializa i con el valor de length -1 ya que el tamaño comienza en 0;
mientras que i sea mayor o igual a 0 ; por cada vuelta hacer i - 1
dentro de ese bucle ,  vamos a sumarle a nuestra variable resultado la cadena en el index que se encuentre,
retornando el resultado
 */


