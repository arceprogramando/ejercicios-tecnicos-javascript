/*  -Realizar una lista nueva (array) que contenga todos los tipos de productos (no cantidades),
consejo:utilizar Object.keys Array.includes. Mostrar el array por consola
    -Posteriormente, obtener el total de productos vendidos por todos los objetos(utilizar Object.values)*/

let productos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        dulces: 2,
    },
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        dulces: 2,
    },
];

let tiposProductos = [];
for (let i = 0; i < productos.length; i++) {
    for (let tipoProducto in productos[i]) {
        if (!tiposProductos.includes(tipoProducto)) {
            tiposProductos.push(tipoProducto);
        }
    }
}
console.log(tiposProductos);


let totalVendidos = 0;
for (let i = 0; i < productos.length; i++) {
    for (let tipoProducto in productos[i]) {
        totalVendidos += productos[i][tipoProducto];
    }
}
console.log(totalVendidos);