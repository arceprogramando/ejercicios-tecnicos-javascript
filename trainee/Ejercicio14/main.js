/**
 * Calcular cuanto debe pagar una persona en un hotel si sabemos que el costo de una noche son 50 dolares.
 *
 *
 * @param {number} dias - Los dias en los cuales la persona se quedara en hotel
 * @returns {string} - Un mensaje con el costo total de la multiplicacion de las noches por el precio
 * @throws {Error} - Si el argumento dias no es un numero 
 */

// Empiezo a escribir codigo en ingles, para ir acomodandome a esa buena practica , pronto todo va a ser traido a ingles

const hotelPrices = (days) => {
    if (isNaN(days)) {
        throw new Error("El argumento 'days' debe ser un número válido");
    }

    const price = 50;
    const priceForDay = price * days

    return console.log(`The price for day is ${priceForDay}`)
}


console.log(hotelPrices(5))

/* Primero creamos una funcion flecha hotelPrices la cual va a recibir por parametros los dias que se va a quedar el cliente
validamos que si  days is Not a Number Mostramos por consola the days is not a number

agregamos el precio por dia a mano que seria 50 dolares
y hacemos la constante precio por dia que es la multiplicacion del dia por el precio

retornamos un mensaje por consola de el priceForDay
*/