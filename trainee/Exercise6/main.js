// Exercise 6

// Create a function that receive a array of number and return the sum of all


const sumArray = (number) => {
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }

    return sum;
}

console.log(sumArray([10, 3, 5, 4, 6]))

/* At the moment, go to create a console.log at the time of creating an answer in the 
if statement. If there is no console.log, the function will return the sum but it will 
not be visible in the terminal. In JavaScript, console.log is a function that prints a 
message in the web browser or in the Node.js terminal. By using console.log with the 
parameter sumArray (and the numbers), the function result will be printed.

*/