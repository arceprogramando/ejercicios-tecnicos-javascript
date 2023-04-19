// Array


const valoresBase = [1, 2, 4, 5, 6];

// Operador Map 
const nuevosValores = valoresBase.map((numero, indice) => numero ** indice);

console.log(valoresBase)
console.log(nuevosValores)

// Includes:
const nombres = ["Luciana", "Maria", "Tomas", "Julio"];

if (nombres.includes("Luciana")) {
    console.log("tenemos el elemento")
} else {
    console.log("No hay elementos en el array")
}