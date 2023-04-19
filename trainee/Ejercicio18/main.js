const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]
// Realizar una lista nueva (array) que contenga todos los tipos de productos(no cantidaddes)
const listaArray = (objetos) => {
    const allKeys = objetos.map(objeto => Object.keys(objeto))
}