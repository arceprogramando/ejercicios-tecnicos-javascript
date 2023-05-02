// Ejercicio 1

/*Definiremos la funcion "mostrarLista", la cual recibira un arreglo con elementos como parametro 
-Si la lista esta vacia, devolver un mensaje indicando "Lista vacia".
-Si la lista cuenta con elementos, mostrarlos 1 por 1 en Consola.Finalizar el proceso devolviendo
la longitud de la lista(utilizar template strings)
-Invocar la funcion con los casos de prueba

*/

const mostrarLista = (lista) => {


    if (!Array.isArray(lista)) {
        console.error("Los parametros ingresados no son un array");
    }

    if (lista.length === 0) {
        console.error("El array ingresado no puede contener un cero");
    }

    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
    console.log(`La longitud de esta lista es ${(lista.length)}`)
};


mostrarLista([1, 2, 3, 4, 5, 6])