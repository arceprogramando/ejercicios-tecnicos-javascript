
/**
 * Calcula el total de ventas para cada producto en base al precio original, descuento y stock.
 * @param {Array} products - Un array de objetos que representan los productos, cada uno con las claves 'price', 'discount' y 'stock'.
 * @returns {Array} Un array de objetos que representan los productos con las claves 'price', 'discount', 'stock', 'sale' y 'total'.
*/

const sales = [
    { price: 10, discount: 0.2, stock: 5 },
    { price: 20, stock: 10 },
    { price: 15, discount: 0.1, stock: 8 }
];

function calculateSalesTotals(sales) {
    return sales.map(({ price, discount = 0, stock }) => {
        const sale = price - (price * discount);
        const total = sale * stock;
        return { price, discount, stock, sale, total };
    });
}


const salesTotals = calculateSalesTotals(sales);
console.log(salesTotals);

/*Primero se ve una const que tiene un array de objetos llamado sales
en el cual 
el primero: tiene precio,descuento,stock.
el segundo: tiene precio,stock.
el tercero: tiene precio,descuento y stock.
 
Se crea una funcion calculateSalesTotals en la cual va a recibir un elemento sales
en este caso un array e inmediantamente vamos realizar una funcion flecha a darle un return en el cual
vamos a utilizar el metodo map que es es un método incorporado en los arreglos, para
iterar a través de los elementos dentro de una colección de arreglos en JavaScript.
Piensa en él, como un bucle para avanzar de un elemento a otro en una lista, 
manteniendo el orden y la posición de cada elemento , a este se lo vamos a aplicar a sales en el cual va a hacer el recorrido dentro de los objetos, donde no haya un discount lo va inicializar en 0 
dentro de esta funcion flecha se va a crear una constante sale en la cual se va hacer por cada objeto y va a contener el precio menos la multiplicacion del precio por el descuento.
despues vamos a crear una constante total en la cual se va a guardar la constante sale por el es stock
retornando un objeto con precio, descuento , stock , sale y total

*/