//Crear una función que reciba un número y devuelva su cuadrado.
/**
 * Función que recibe un número y devuelve su cuadrado.
 * @param {Number} num - El número a elevar al cuadrado.
 * @returns {Number} El cuadrado del número.
 */

const cuadradoDeUnNumero = (num) => {
    if (num != typeof ("number")) {
        console.log(`El tipo de valor de ${num} no es de un numero`);
        return
    }
    num = num * num
    return num
}

console.log(cuadradoDeUnNumero(20))
console.log(cuadradoDeUnNumero("20"))

/* En esta funcion flecha se busca el cuadrado de un numero , recibira un numero en el cual
 si numero es diferente de tipo number dvolvera que el valor no es de numero y retorna dejando de funcionar
 si no entra por esa validacion
 se guarda en la variable num , la multiplicacion de num por num 
 retornando lo guardado en num y termianndo con la funcion
 */