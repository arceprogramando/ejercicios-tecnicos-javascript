// Exercise 5

/*determine if a number is even or odd */

const evenOrOdd = (number) => {
    if (typeof number !== "number") {
        console.log("the entered value does not correspond to a number");
        return
    }

    if (number < 0) {
        console.log(`The entered value (${number})cannot be less than 0`)
    }

    if (number % 2 == 0) {
        console.log(`the entered value (${number} is even)`);
        return
    } else {
        console.log(`the entered value (${number}) is odd`);
        return
    }
}

evenOrOdd(30)
evenOrOdd(-30)
evenOrOdd("-30")
evenOrOdd("30")
evenOrOdd(31)
/* In this exercise , is create an oddOrEven arrow function
in which you are prompted for a number. in the first validation
if the type of number is different from a number it will go
directly to tell me that the values does not correspond to a
number. In the second validation it is verified if number is 
less than 0 , if it is , it warns that it cannot be entered number
lesss than 0 in the third*/



