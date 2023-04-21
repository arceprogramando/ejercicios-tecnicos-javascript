/*
Escribe una función en JavaScript que tome un número como argumento y
 devuelva "Fizz" si el número es divisible por 3, "Buzz" si el número es 
 divisible por 5, "FizzBuzz" si el número es divisible por ambos 3 y 5, y si no es divisible por ninguno de ellos, 
 devolverá el mismo número.

 */
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
}


console.log(fizzBuzz(3))
console.log(fizzBuzz(15))
console.log(fizzBuzz(4))
console.log(fizzBuzz(3))


