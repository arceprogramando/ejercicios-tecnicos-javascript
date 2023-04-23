

//Exercise 3
/*

Promedio de tres números: Escribe una función que tome tres números como argumentos y devuelva su promedio.
average of three numbers : write a function  that it takes three number with parameter and return the average
*/

function calculateAverage(num1, num2, num3) {
  if (typeof num1 !== "number") {
    console.error("Error: The first parameter is not a number");
    return null;
  }

  if (typeof num2 !== "number") {
    console.error("Error: The second parameter is not a number");
    return null;
  }

  if (typeof num3 !== "number") {
    console.error("Error: the third parameter is not a number");
    return null;
  }

  const average = console.log((num1 + num2 + num3) / 3);

  return average;
}

calculateAverage(1, 2, 3);
calculateAverage(1, 3);
calculateAverage(1, 3);
calculateAverage(1, 3, "");
calculateAverage(1, "", "");

/* In this exercise, the task is to create a function that calculate
three numbers, taking three parameter and return the average of
numbers, i created a constant arrow function named "calculateAverage"
that takes three parameters(num1,num2,num3).
After defining the function, I added thre type validation statements
to ensure that parameter are number , if num1,num2 and num3 is not a 
number  
*/
