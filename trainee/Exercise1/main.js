// Exercise 1


//sum of two number: write a function takes two parameters as arguments and returns the sum

const sumTwoNumbers = (num1, num2) => {
    if (!(typeof num1 === "number")) {
        throw new Error("The first parameter must be a number.");
    }
    if (!(typeof num2 === "number")) {
        throw new Error("the second parameters must be a number");
    }

    return num1 + num2
}


try {
    console.log(sumTwoNumbers(1, 2));
    console.log(sumTwoNumbers(1, "2"));
} catch (error) {
    console.log(error.message);
}


/*In this exercise, the task is to create a function that adds two numbers together, 
taking them as parameters and returning the result.
 To begin, I created a constant arrow function named sumTwoNumbers that takes two parameters (num1 and num2).
After defining the function, I added two type validation statements to ensure that the parameters are numbers. If num1 is not of the number type, then the code throws an error stating that the first parameter must be a number. The same validation is repeated for num2. If the type validation passes, then the function returns the sum of num1 and num2.
Next, I created a try-catch block that will execute the function call and catch any errors that may occur. Within the try block, I called the sumTwoNumbers function with two different sets of parameter values. If an error occurs, the catch block will log the error message to the consol
*/