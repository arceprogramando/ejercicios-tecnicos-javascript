// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const contarCaracteres = caracteres => caracteres.length

let string = 'Hola Mundo'
const cantCaractes = contarCaracteres(string);
console.log("Ejercicio Uno : ", cantCaractes)

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const recortarCaracteres = (caracteres, recorte) => {
    const caracteresrecortados = caracteres.slice(0, recorte)
    return caracteresrecortados
}

const palabrarecortada = recortarCaracteres('Hola Mundo', 4);
console.log("Ejercicio Dos : ", palabrarecortada)

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const arrayPorPalabraEnFrase = (caracteres, separador) => caracteres.split(separador)

const arrayDePalabras = arrayPorPalabraEnFrase('Hola que tal', ' ')
console.log("Ejercicio Tres : ", arrayDePalabras)

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repetirTexto = (texto, cantidad) => {
    const textoRepetido = texto.repeat(cantidad)
    return textoRepetido
}
const textoRepetido = repetirTexto('Hola Mundo ', 5)
console.log('Ejercicio Cuatro : ', textoRepetido)


// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirPalabra = (palabra) => palabra.split("").reverse().join("");

const textoInvertido = invertirPalabra('Hola mundo');

console.log('Ejercicio Cinco : ', textoInvertido);

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const cantidadDeRepeticiones = (frase = "", palabra = "") => {
    let i = 0, contador = 0;

    while (i !== -1) {
        i = frase.indexOf(palabra, i);
        if (i !== -1) {
            i++;
            contador++;
        }
    }

    return contador;
};

const cantidadPalabra = cantidadDeRepeticiones('Hola buenas como estas Hola', 'Hola')
console.log('Ejercicio Seis : ', cantidadPalabra)

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const esPalindroma = (frase) => {
    let fraseminuscula = frase.toLowerCase()
    let fraseInvertida = invertirPalabra(fraseminuscula)

    if (fraseminuscula === fraseInvertida) {
        return 'Es Palindroma';
    }

    return 'No es Palindroma';
}

const fraseEntrada = 'Ala'

const Palindroma = esPalindroma(fraseEntrada);
console.log("Ejercicio Siete : ", Palindroma)


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarPatron = (texto, patron) => {
    const regEx = new RegExp(patron, 'ig');
    const textoSinPatron = texto.replace(regEx, '');
    return textoSinPatron;
};

const textoOriginal = "xyz1, xyz2, xyz3, xyz4 y xyz5";
const patronEliminar = "xyz";
const textoSinPatron = eliminarPatron(textoOriginal, patronEliminar);

console.log('Ejercicio Ocho : ', textoSinPatron);


// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroRandom = (max, min) => Math.floor((Math.random() * (max + 1 - min)) + min);
const Random = numeroRandom(501, 600)
console.log('Ejercicio Nueve:', Random)


// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const invertirNumero = (numero) => {
    const numeroATexto = numero.toString()
    const numeroInvertido = numeroATexto.split("").reverse().join("");

    if (+numero === +numeroInvertido) {
        return 'Es Capicua'
    } else {
        return 'No es Capicua'
    }
}

const esCapicua = invertirNumero(303)
console.log('Ejercicio Diez: ', esCapicua);

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const Factorial = (n) => {

    let sumatoria = 1

    for (i = 1; i <= n; i++) {
        sumatoria *= i;
    }

    return sumatoria
}

const creacionFactorial = Factorial(5);

console.log("Ejercicio Once : ", creacionFactorial)



// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const esPrimo = (n) => {
    if (n === 0 || n === 1 || n === 4) return false;

    for (let i = 2; i < n / 2; i++) {
        if (n % i === 0) return false;
    }

    return true
}

const Primo = esPrimo(97);
console.log("Ejercicio Doce : ", Primo)

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parOImpar = (numero) => numero % 2 === 0
    ? 'Es par'
    : 'Es impar'

const esParOImpar = parOImpar(21)
console.log("Ejercicio Trece : ", esParOImpar)

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const calcularGrados = (grados, unidad) => {
    if (unidad === "C") {
        const fahrenheit = (9 / 5) * grados + 32;
        return `${fahrenheit}°F`;
    } else if (unidad === "F") {
        const celsius = (5 / 9) * (grados - 32);
        return `${celsius}°C`;
    } else {
        return "Unidad no válida. Utiliza 'C' o 'F' Mayuscula.";
    }
}
const gradosPasados = calcularGrados(0, "C");
console.log("Ejercicio Catorce: ", gradosPasados)

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const convertirBase = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn('No ingresaste el numero a convertir');

    if (typeof numero !== 'number') return console.error(`El valor "${numero}" ingresado no es un numero`);

    if (base === undefined) return console.warn('No ingresaste la base a convertir');

    if (typeof base !== 'number') return console.error(`El valor "${baseDestino}" ingresado no es un numero`);

    if (base === 2) {
        return parseInt(numero, base)
    } else if (base === 10) {
        return numero.toString(2)
    }

}

const convertir = convertirBase(100, 10);
console.log("Ejercicio Quince: ", convertir)



// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuento = (valor, descuento) => {

    let calculo = valor - (valor * descuento / 100);
    return calculo
}

const usarDescuento = descuento(1000, 20);
console.log("EJercicio Dieciseis:", usarDescuento)


// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const determinarTiempo = (fecha) => {
    if (!(fecha instanceof Date) || isNaN(fecha)) {
        console.error('Por favor, ingresa una fecha válida.');
        return;
    }

    const fechaActual = new Date();
    const diferenciaEnMilisegundos = fechaActual - fecha;
    const tiempoPasados = Math.floor(diferenciaEnMilisegundos / (365.25 * 24 * 60 * 60 * 1000));

    return tiempoPasados
};

let fecha = new Date(1984, 4, 23)
const tiempo = determinarTiempo(fecha)
console.log("Ejercicio Diecisiete:", tiempo, "Años")

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const vocalesYConsonantes = (cadena = '') => {
    if (!cadena) return console.warn('No ingresaste una cadena de texto');

    if (typeof cadena !== 'string') return console.error(`El valor "${cadena}" ingresado no es una cadena de texto`);

    let vocales = 0;
    let consonantes = 0;

    for (let letra of cadena) {
        if (/[aeiouáéíóú]/.test(letra)) vocales++;

        if (/[bcdfghijklmnñpqrstvwxyz]/.test(letra)) consonantes++;
    }

    return { cadena, vocales, consonantes };
}

const objetoVocalesyConsonantes = vocalesYConsonantes('Hola como estas')
console.log('EJercicio Dieciocho: ', objetoVocalesyConsonantes);




// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre) => {
    if (typeof nombre !== 'string') {
        console.error('El valor proporcionado no es una cadena de texto.');
        return false;
    }

    const regEx = /^[a-zA-Z\s]+$/;

    if (regEx.test(nombre)) {
        return true;
    } else {
        return false;
    }
};

const nombreValidado = validarNombre('Felipe Arce')
console.log("Ejercicio DieciNueve:", nombreValidado)



// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = '') => {
    if (!email) return console.warn('No ingresaste un email ');

    const regExEmail = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/

    if (regExEmail.test(email)) {
        return true
    } else {
        return false
    }
}

const emailValidado = validarEmail('arceprogramando@gmail.com')
console.log("Ejercicio Veinte:", emailValidado)

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const elevarArray = (array = []) => {
    const elevarArray = array.map((item) => item * item)
    return elevarArray
}

const arrayElevado = elevarArray([1, 4, 5])
console.log("Ejercicio VeintiUno:", arrayElevado)

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const devolverMaxyMin = (array = []) => {
    if (array.length === 0) {
        console.warn('El array está vacío.');
        return;
    }

    let max = array[0];
    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }

        if (array[i] < min) {
            min = array[i];
        }
    }

    return [max, min];
};

const resultado = devolverMaxyMin([1, 4, 5, 99, -60]);
console.log("Ejercicio Veintidos:", resultado);


// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. 


const devolverParesEImpares = (array = []) => {
    if (array.length === 0) {
        console.warn('El array está vacío.');
        return;
    }

    let pares = [];
    let impares = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {

            pares += array[i];
        } else {
            impares += array[i];
        }
    }

    return [pares, impares];
};

const resultadoParEImpares = devolverParesEImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
console.log("Ejercicio Veintitres: ", resultadoParEImpares)

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenarArreglo = (arr = undefined) => {


    if (arr === undefined) return console.warn('No ingreasste un arreglo de numeros');

    if (!arr instanceof Array) return console.error('El valor que ingresaste no es un arreglo')

    if (arr.length === 0) {
        console.warn('El array está vacío.');
        return;
    }

    for (let num of arr) {
        if (typeof num !== 'number') return console.error(`El valor '${num} Ingresado, no es un numero'`);
    }


    const asc = arr.map((elemento) => elemento).sort()
    const desc = arr.map((elemento) => elemento).sort().reverse()

    return {
        arr,
        asc,
        desc,
    }
}

const arregloOrdenadoAscDesc = ordenarArreglo([7, 5, 7, 8, 6]);
console.log("Ejercicio VeintiCuatro:", arregloOrdenadoAscDesc);
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const quitarDuplicados = (arr = undefined) => {
    if (arr === undefined) return console.warn('No ingresaste un arreglo de números');

    if (!(arr instanceof Array)) return console.error('El valor que ingresaste no es un arreglo');

    if (arr.length === 0) {
        console.warn('El array está vacío.');
        return;
    }

    const sinDuplicados = arr.filter((value, index, self) => self.indexOf(value) === index);

    return {
        original: arr,
        sinDuplicados: sinDuplicados,
    };
};

// Ejemplo de uso
const resultadoSinDuplicados = quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);
console.log('Ejercicio Veinticinco:', resultadoSinDuplicados);


// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (arr = undefined) => {
    if (arr === undefined) return console.warn('No ingresaste un arreglo de números');

    if (!(arr instanceof Array)) return console.error('El valor que ingresaste no es un arreglo');

    if (arr.length === 0) {
        console.warn('El array está vacío.');
        return;
    }

    const total = arr.reduce((sum, num) => sum + num, 0);
    const promedio = total / arr.length;

    return `El promedio de [${arr.join(', ')}] es ${promedio}`;
}

const mostrarPromedio = promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
console.log("Ejercicio Veinticinco:", mostrarPromedio);

//EJERCICIO FINAL 

// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//      - Valida que el título no rebase los 100 caracteres.
//      - Valida que el director no rebase los 50 caracteres.
//      - Valida que el año de estreno sea un número entero de 4 dígitos.
//      - Valida que el país o paises sea introducidos en forma de arreglo.
//      - Valida que los géneros sean introducidos en forma de arreglo.
//      - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//      - Crea un método estático que devuelva los géneros aceptados*.
//      - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//      - Crea un método que devuelva toda la ficha técnica de la película.
//      - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class Pelicula {
    constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais)
        this.validarGeneros(generos)
        this.validarCalificacion(calificacion)
    }

    static get listaGeneros() {
        return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
    }

    static get generosAceptados() {
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(', ')}`)
    }
    validarCadena(propiedad, valor) {
        if (!valor) {
            console.warn(`${propiedad} '${valor}' está vacío`);
            return false;
        }

        if (typeof valor !== 'string') {
            console.error(`${propiedad} '${valor}' ingresado, no es una cadena de texto`);
            return false;
        }

        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud) {
        if (valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud})`);

        return true;
    }

    validarNumero(propiedad, valor) {
        if (isNaN(valor)) {
            console.warn(`${propiedad} "${valor}" no es un número`);
            return false;
        }
        return true;
    }

    validarArreglo(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor} esta vacio"`);

        if (!valor instanceof Array) return console.error(`${propiedad} "${valor} ingresado, NO es un arreglo"`)

        if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`)

        for (let cadena of valor) {
            if (typeof cadena !== 'string') return console.error(`El valor ${cadena} ingresado, no es una cadena de texto`)
        }

        return true;
    }

    validarIMDB(id) {
        if (this.validarCadena('IMDB id', id)) {
            if (!/^[a-z]{2}[0-9]{7}$/.test(id)) {
                console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres: dos letras minúsculas seguidas de siete números.`);
            }
        }
    }

    validarTitulo(titulo) {
        if (this.validarCadena('Titulo', titulo)) {
            this.validarLongitudCadena('Titulo', titulo, 100);
        }
    }

    validarDirector(director) {
        if (this.validarCadena('Director', director)) {
            this.validarLongitudCadena('Director', director, 50);
        }
    }

    validarEstreno(estreno) {
        if (this.validarNumero('Año De estreno', estreno)) {
            if (!/^[0-9]{4}$/.test(estreno)) {
                console.error(`Año de Estreno ${estreno} no es válido, debe ser un número de cuatro dígitos.`);
            }
        }
    }

    validarPais(pais) {
        this.validarArreglo('Pais', pais)
    }

    validarGeneros(generos) {
        if (this.validarArreglo('Generos', generos)) {
            for (let genero of generos) {
                if (!Pelicula.listaGeneros.includes(genero)) {
                    return console.error(`Genero(s) incorrectos "${generos.join(', ')}"`)
                    Pelicula.generosAceptados()
                }
            }
        }
    }

    validarCalificacion(calificacion) {
        if (this.validarNumero('Calificacion', calificacion)) {
            if (calificacion < 0 || calificacion > 10) {
                console.error(`La calificación debe estar en un rango entre 0 y 10`);
            } else {
                this.calificacion = calificacion.toFixed(1);
            }
        }
    }

    fichaTecnica() {
        console.info(`Ficha Técnica:\nTítulo "${this.titulo}" |\nDirector ${this.director}|\nAño: ${this.estreno} |\nPaís: ${this.pais.join('-')} \nCalificacion: ${this.calificacion}`);
    }
}

const misPelis = [
    {
        id: 'ab1234567',
        titulo: 'Ejemplo de Película',
        director: 'Director Ejemplo',
        estreno: 2023,
        pais: ['Ejemplo'],
        generos: ['Drama', 'Comedy'],
        calificacion: 8.5
    },
    {
        id: 'ab1234568',
        titulo: 'Otra Película',
        director: 'Otro Director',
        estreno: 2022,
        pais: ['Otro País'],
        generos: ['Action', 'Adventure'],
        calificacion: 7.8
    }
];

misPelis.forEach(el => {
    const pelicula = new Pelicula(el);
    pelicula.fichaTecnica();
});