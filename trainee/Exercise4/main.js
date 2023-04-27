
// Exercise 4

/* converter  degrees to Fahreinheit: write the function that takes a number (the temperature in degrees celsius)
with arguments and return its Fahrenheit equivalent*/

const celsiusToFahrenheit = (celsius) => {
    if (typeof celsius !== "number") {
        console.log(`El valor ${celsius} ingresado no es valido`);
    }

    let fahrenheit = (celsius * 9) / 5 + 32;

    return fahrenheit.toFixed(2);

}

console.log(celsiusToFahrenheit(32));
console.log(celsiusToFahrenheit(32));

/*

In effect, the arrow function celsiusToFahrenheit 
receives a parameter with Celsius and uses the 
mathematical formula fahrenheit = (celsius * 9/5) + 32. 
The function applies this formula and returns the result 
using the toFixed method, rounded to two decimal places.

*/