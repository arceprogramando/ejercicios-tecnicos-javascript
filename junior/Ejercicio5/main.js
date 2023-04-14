/**
 * Calcula el promedio ponderado de un conjunto de valores y sus respectivos pesos.Ambos arrays tiene que tener la misma longitud
 *
 * @param {Array<number>} valores - El array con los valores a ponderar.
 * @param {Array<number>} pesos - El array con los pesos correspondientes a los valores.
 * @returns {number} El promedio ponderado calculado.
 * @throws {Error} Si los arrays de valores y pesos no tienen la misma longitud.
 *
 * @example
 * const valores = [5, 7, 10];
 * const pesos = [2, 3, 5];
 * const promedio = promedioPonderado(valores, pesos); // 8.5
 */

const promedioPonderado = (valores, pesos) => {
    if (valores.length !== pesos.length) {
        console.log("Los arrays deben tener la misma longitud");
        return;
    }

    let totalValores = 0;
    let totalPesos = 0;

    for (let i = 0; i < valores.length; i++) {
        totalValores += valores[i] * pesos[i];
        totalPesos += pesos[i];
    }

    return totalValores / totalPesos;
};

const valores = [5, 7, 10];
const pesos = [2, 3, 5];
const promedio = promedioPonderado(valores, pesos);

console.log(promedio);

/*
se pide escribir una funcion que va a resolver el promedioPonderado:
que es el promedio a la cifra que resulta más idéntica o qué es la más cercana a la media aritmética
empezamos inicializando una funcion flecha llamada promedioPonderado que va a recibir dos valores ,
estos valores van a ser arrays , no queda explicitos ya que pueden ser menos valores los recibidos
si la longitud de valores es diferente a la longitud de pesos , vamos a avisar por consola que los arrays
deben tener la misma longitu y retornar a salirnos de la funcion , es una validacion para eliminar problemas
a la hora de entrar al bucle . 
inicializamos una variable let totalValores en 0 y una variable let en totalPesos en 0 para poder guardar su suma dentro
del bucle siguiente
abrimos un bucle for inicializando i en 0 , y dandole una cantidad igual mientras  que i sea menor a  a el valor de valores.length;y por cada vuelta sumamos uno , dentro del bucle guardamos en totalValores la suma de la multiplicacion entre el indice de valores actual y el indice de pesos actual
en totalPesos  se suma el indice de pesos actual 
retornamos el totalValores dividido el totalPesos para dar la media aritmetica*/