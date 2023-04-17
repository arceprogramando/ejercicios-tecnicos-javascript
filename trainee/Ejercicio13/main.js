/**
 * Crea una función que acepte por parámetros el nombre y sueldo de un trabajador.
 * Incrementa en un 25% el sueldo y muestra el nuevo sueldo a cobrar.
 *
 * @param {string} nombre - El nombre del trabajador.
 * @param {number} sueldo - El sueldo actual del trabajador. Debe ser un número válido.
 * @returns {string} - Un mensaje con el nuevo sueldo del trabajador después del aumento.
 * @throws {Error} - Si el argumento "nombre" no es una cadena o si el argumento "sueldo" no es un número válido.
 */

const aumentoSueldo = (nombre, sueldo) => {
    if (typeof nombre !== "string" || typeof sueldo !== "number" || isNaN(sueldo)) {
        throw new Error("Los parámetros deben ser una cadena y un número válido");
    }


    let aumento = sueldo + (sueldo * 0.25);
    return `${nombre}, tu nuevo sueldo es ${aumento}.`;
};

console.log(aumentoSueldo("felipe", 35))


/*Creamos una funcion flecha llamada aumentoSueldo en la cual recibe los parametros nombre y sueldo 
si el tipo de nombre es diferente a un string || o el tipo de sueldo es diferente a number || o si is Not a Number da falso
lanzamos un nuevo throw new error saliendo de ahi 
empezamos a inicializar aumento que va aguardar el sueldo + el sueldo * 0,25 que dara el 25% de aumento recibido 
despues retornamos el nombre + el aumento
*/
