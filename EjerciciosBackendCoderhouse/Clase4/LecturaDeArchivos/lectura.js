const fs = require('fs')

const operacionesAsincronas = async () => {
    try {
        // Leer archivo
        const contenidoStr = await fs.promises.readFile('./package.json', 'utf-8')
        const contenidoObj = JSON.parse(contenidoStr) // Convertir a objeto
        const { size } = await fs.promises.stat('./package.json') // Obtener tamaño en bytes

        // Crear objeto info
        const info = {
            contenidoStr,
            contenidoObj,
            size
        }

        // Imprimir resultado
        console.log(info)

        // Escribir en archivo (opcional)
        await fs.promises.appendFile('./package.json', JSON.stringify(info, null, 2))

    } catch (error) {
        console.error(error)
    }
}

operacionesAsincronas()