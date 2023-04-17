

/**
 *  Segun una cantidad de kilos especificas que pesa un producto (puede ingresar decimales) 
    Calcular el peso en libras, sabiendo que 1 kilogramo es igual a 2205 libras
 *
 *
 * @param {number} kilos - Los kilos que van a ser pasados a libras
 * @returns {number} - libras retornadas 
 * @throws {Error} - Si el argumento dias no es un numero 
 */

const weightPounds = (kilos) => {

    if (isNaN(kilos)) {
        throw new Error("the value written is not a number");
        return;

    }

    let libras = kilos * 2.205;

    return libras;
}


console.log(weightPounds(35));

/* For realice this ejercice first create the arrow function , with parameter of kilos
in the validation if kilos is a not a number , insert the console.log(with the phrase the value written is not a number)
and return to the end the function
*/
