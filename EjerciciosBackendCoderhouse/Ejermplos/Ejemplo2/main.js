// Dados los siguientes objetos.

let objeto1 = {
    propiedad1: 2,
    propiedad2: "b",
    propiedad3: true,
}

let objeto2 = {
    propiedad1: "c",
    propiedad2: [2, 3, 5, 6, 7],
}

// SPREAD OPERATOR Nos sirve para hacer una destructuracion del objeto, para poder utilizar solo las propiedades que queremos

let { propiedad1, propiedad2 } = objeto1 // Tomamos el objeto1 y lo "rompemos" para obtener solo las primeras dos propiedades
let objeto3 = { ...objeto1, ...objeto2 }//Spread operator tambien se puede utilizar para vaciar propiedades de un objeto
//

let objeto4 = {
    a: 1,
    b: 2,
    c: 3
}

let { a, ...rest } = objeto4 //Indicamos que queremos trabajar con la propiedad a, y guardar en un objeto el resto de las propiedades de ese objeto,en caso de que lo que los necesitemos mas adelante.
console.log(rest)