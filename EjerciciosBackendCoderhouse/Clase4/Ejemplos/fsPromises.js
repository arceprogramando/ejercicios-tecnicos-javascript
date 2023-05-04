const fs = require('fs')//A este punto nos debe quedar perfectamente claro como importar el modulo de fileSystem
const operacionesAsincronas = async () => {//Nota que la funcion debe ser asincrona porque trabajamos con promesas.
    //Escribimos un archivo
    await fs.promises.writeFile('./ejemploPromesa.txt', '!Hola desde promesa!')//(ruta y nombre de archivo, contenido)
    //Utilizar el modulo de promises nos facilita la operacion para no requerir estar dentro de un callback.

    let resultado = await fs.promises.readFile('./ejemploPromesa.txt', 'utf-8')//(ruta y nombre de archivo , codificacion)
    console.log(resultado)// Veremos: "!Hola desde promesa!";

    // Modificamos el archivo

    await fs.promises.appendFile('./ejemploPromesa.txt', ' Contenido Adicional')  //(Ruta y nombre de archivo, contenido)

    // Releemos el archivo

    resultado = await fs.promises.readFile('./ejemploPromesa.txt', 'utf-8');
    console.log(resultado)// Veremos: "!Hola desde promesa! Contenido Adicional"

    // Finalmente, borramos el archivo

    await fs.promises.unlink('./ejemploPromesa.txt');
}

operacionesAsincronas();

// Tenemos un codigo mucho mas limpio, mucho mas simple y mucho mas entendible