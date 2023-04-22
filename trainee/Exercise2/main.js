// Exercise 2
/**
 * divide two numbers and return the result



Ejercicio 2

*/

const divideTwoNumbers = (num1, num2) => {

  if (!(typeof num1 === "number")) {
    throw new Error("The first parameter must be a number.");
  }
  if (!(typeof num2 === "number")) {
    throw new Error("the second parameters must be a number");
  }

  if (num2 <= 0) {
    throw new Error("the second parameter must be a positive number (greater than or equal to 1)");
  }


  return num1 / num2;
}

try {
  console.log(divideTwoNumbers(1, 2));
  // console.log(divideTwoNumbers(1, "2"))
  // console.log(divideTwoNumbers(1, -1))

} catch (error) {
  console.log(error.message);
}


/* In this exercise, the task is to create a function that divides
two numbers, taking them as parameters and returning the result.
To begin, I created a constant arrow function named "divideTwoNumbers"
that takes two parameters (num1 and num2). After defining the function,
I added three type validation statements to ensure that the parameters
are numbers and that parameter two is greater than or equal to one.
If num1 is not of the number type, then the code throws an error
stating that the first parameter must be a number.
The same validation is repeated for num2, and the additional
validation of it being greater than or equal to one is added.
If the validations pass, then the function returns the division of num1 and num2.
Next, I created a try-catch block that will execute the function call and catch
any errors that may occur. Within the try block, I called the "divideTwoNumbers"
function with two different sets of parameter values. If an error occurs, the catch
block will log the error message to the console.
*/














// function dividirNumeros(numero1, numero2) {
//   if (numero2 <= 0) {
//     console.log("El numero 2 no puede ser 0 o menos que cero");
//   } else {
//     if (typeof numero1 !== "number" || typeof numero2 !== "number") {
//       console.log("Error: Uno o ambos argumentos no son numeros");
//     } else {
//       resultado = numero1 / numero2;
//       console.log(`El resultado es ${resultado}`);
//     }
//   }
// }

// dividirNumeros(1, 2);
// dividirNumeros(30, 0);
// dividirNumeros(30, -5);
// dividirNumeros(30, "a");

/*En este ejercicio se pide una funcion dividirNumeros , que va llegarle dos numeros , numero1 y numero2 
si numero 2 es menor o igual a 0 se mostrara por consola el numero 2 no puede ser 0 o menos que cero
    sino
    si el tipo de valor de numero 1 es diferente a number o el tipo de valor numero2 es diferente a number
    se muestra por consola el error en que uno o ambos argumentos no son numeros
        sino
        se guarda en resultado la division entre numero1 y numero2
        terminando mostrando por consola el resultado es y el resultado.
    */
