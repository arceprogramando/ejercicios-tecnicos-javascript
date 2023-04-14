/**
 * Clase que representa una persona.
 * @class
 * @param {string} nombre - El nombre de la persona.
 * @param {number} edad - La edad de la persona.
 * @param {string} genero - El género de la persona.
 */

/* Crea una clase Persona con las propiedades nombre, edad y genero. Luego crea un objeto persona1 de la clase
Persona con valores para cada propiedad y muestra en la consola la propiedad nombre*/

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`)
    }
}

const persona1 = new Persona("Juan", 30, "masculino");

persona1.saludar()

/*Se crea una clase Persona con un constructor que va a recibir nombre,edad y genero
se utiliza el constructor en el cual
Constructor: La clase tiene un constructor que se ejecuta cuando se crea una instancia de la clase Persona con la palabra 
clave "new". El constructor tiene tres parámetros: nombre, edad y genero. Dentro del constructor, se asigna el valor de 
cada parámetro a las propiedades correspondientes de la instancia de la clase utilizando la palabra clave "this".
La palabra clave this en JavaScript se refiere al objeto actual que está ejecutando una función. En otras palabras, this es
una referencia al objeto en el cual se está llamando una función.
tambien se agrega un  método de la clase Persona. En este caso, es un método que simplemente imprime en la consola un mensaje
de saludo utilizando la propiedad nombre de la instancia de la clase Persona en la que se llama al método.
despues guardamos en una constante persona1 la llamada a la creacion de el nuevo objeto  en el cual va a contener los valores de 
Persona , tanto los metodos constructores como metodos saludar
*/