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
