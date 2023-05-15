/**
 * Hallar la superficie de un cuadrado conociendo el valor de un lado.
 *
 */

const squareSurface = (side) => {

    if (isNaN(side)) {
        console.error("the side is not a number");
    }

    const surface = side * side;

    return surface;
}


console.log(squareSurface(35))
console.log(squareSurface("35"))

/*To solve this exercise of giving the surface of the Square we create a function
SquareSurface that will receive the value of the known side
We are going to do a validation in which if side is Nan (Not a Number) it will use to return a throw new error
in which it sends ("The side is not a number") this will be able to be handled in the future with try catch , we will see it later.
we create our exercise in which we create our exercise in which according to mathematics the surface of a
space is obtained by multiplying the sides, then we return surface */