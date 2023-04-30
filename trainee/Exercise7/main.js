// Exercise 7

// Create a function that receives a number and returns its square

const squareNumber = (number) => isNaN(number) ? console.error("number is not a number") : number ** 2;

console.log(squareNumber(32))
console.log(squareNumber(43))
console.log(squareNumber("dd"))


/*
In this arrow function is wanted the square of number,
is created the arrow function with parameter number,
After validation of number ,if number is nota  number print the 
console.error else number is squart
 
 
*/
