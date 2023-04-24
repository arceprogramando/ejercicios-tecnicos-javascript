// Exponential ** permite hacer el equivalenta de la operacion Math.pow(base,exp), para elevar un valor base a un exponente
let valoresBase = [1, 2, 3, 4, 5, 6] //Tenemos un conjunto de valores base.
let nuevosValores = valoresBase.map((numero, indice) => numero ** indice)

console.log(nuevosValores) //Resultado [1,29,64,625,7776]

/*
    *El codigo mostrado arriba toma un arreglo de valores base y , con ayuda del operador map, utiliza el operador
    *exponencial para elevar el valor base, por su indice (i**0,2**1,3**2,4**3,5**,6**5)
   
//Includes: corrobar si algun elemento existe dentro del arreglo.

    
*/

let nombres = ['Juan', 'Camilo', 'Maria', 'Ana', 'Humberto',]

if (nombres.includes('Camilo')) {//Includes devolvera solo true o false segun sea el caso, por lo cual podemos usarlo dentro del if
    console.log('Camilo si dijo una groseria')
} else {
    console.log('Camilo no dijo una groseria')
}