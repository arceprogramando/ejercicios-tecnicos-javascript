// Exercise 9

//Calculates total sales for each product based on original price,
//discount, and stock


const sales = [
    { price: 10, discount: 0.2, stock: 5 },
    { price: 20, stock: 10 },
    { price: 15, discount: 0.1, stock: 8 }
];

const calculateSalesTotals = (sales) => {

    return sales.map(({ price, discount = 0, stock }) => {
        const sale = price - (price * discount);
        const total = sale * stock

    })
}

const salesTotals = calculateSalesTotals(sales);
console.log(salesTotals);

/*First, a const is defined that contains an array of objects called sales.
Each object in the array has different properties. The first object has price,discount, 
and stock. The second object has price and stock, while the third object has price
discount, and stock.
A function called calculateSalesTotals is created, which receives an argument sales,
 which is an array. Within the function,
an arrow function is used that utilizes the built-in map method to iterate over
 the elements in the sales array.
The map method applies the arrow function to each object in the array.

Within the arrow function, a constant called sale is created for each object,
 which contains the value of the
price property minus the product of the price property and the discount property
 (or 0 if discount is not defined). Another constant called total is then created,
  which is equal to the product of sale and the stock property.

Finally, the calculateSalesTotals function returns an array of objects, 
each with the price, discount, stock, sale, and total properties. 
The salesTotals constant is then created by calling the calculateSalesTotals
 function with the sales array as an argument. Finally, the salesTotals constant 
 is logged to the console. */