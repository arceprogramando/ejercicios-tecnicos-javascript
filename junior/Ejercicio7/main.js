/**
 * Crea una clase que represente a un Cuadrado
 * @class
 * @param {number} ancho - El ancho de el cuadrado.
 * @param {number} alto - La altura de el cuadrado.
 * 
 */

/* Crea una clase Rectangulo con propiedades ancho y alto. Agrega un método que calcule el área del rectángulo.*/


class Cuadrado {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    saludo() {
        console.log(`Hola soy un cuadrado\n y mi ancho  es de: ${this.ancho} \n y mi alto alto es de: ${this.alto} \n hacen 
        una medida de ${this.ancho * this.alto}`)
    }
}
const cuadrado1 = new Cuadrado(30, 30);

cuadrado1.saludo()


/*Se nos pide crear una clase rectangulo en el cual va a resolver el area del rectangulo para esto se va a multiplicar el 
ancho x el alto , para esto vamos a crear una clase Cuadrado 
en el cual hacemos un constructor que va a recibir y crear el ancho y alto 
usando el this para que el this interactue en el constructor , this ancho y this alto dentro del metodo constructor
tambien creamos un metodo saludo que es el que va a contener la anchura y la altura en el cual se devuelve tambien el resultado
de la multiplicacion de estos  */