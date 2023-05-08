// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
    if (number >= 0) {
        return -number;
    } else {
        return Math.abs(number);
    }
}


// Best Practices (not for me)
function opposite2(number) {
    return (-number);
}



// First is created de functionm opposite that recibe a parameter number
// If number is higher that zero return the calculate
// of -(number), to invert it to number.
// Else return with library math , the absolute of the number


console.log(opposite(10))
console.log(opposite(-10))
console.log(opposite2(10))
console.log(opposite2(-10))