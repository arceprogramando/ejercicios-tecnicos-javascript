/*  
    Realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual.
    Posteriormente leer al archivo y mostrar el contenido por consola.
    Utilizar el modulo fs y sus operaciones de tipo callback
 */


const fs = require('fs');
const filename = 'fecha.txt';
const now = new Date();
const content = now.toString();

// Verificar si el archivo existe
fs.access(filename, fs.constants.F_OK, (err) => {
    if (err) {
        // Si el archivo no existe, crearlo y escribir la fecha actual
        fs.writeFile(filename, content, (err) => {
            if (err) {
                console.error('Error al escribir el archivo', err);
            } else {
                console.log(`Archivo "${filename}" creado y contenido escrito:`, content);
            }
        });
    } else {
        // Si el archivo existe, leer su contenido y agregar la nueva fecha al final
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer el archivo', err);
            } else {
                const lines = data.trim().split('\n');
                const lastLine = lines[lines.length - 1];
                let lastNumber = parseInt(lastLine.match(/\d+/)[0]);
                if (isNaN(lastNumber)) {
                    lastNumber = 0;
                }
                const newNumber = lastNumber + 1;
                const newContent = `${content} - ${newNumber}`;
                fs.appendFile(filename, '\n' + newContent, (err) => {
                    if (err) {
                        console.error('Error al agregar la fecha al archivo', err);
                    } else {
                        console.log(`Fecha "${newContent}" agregada al archivo "${filename}"`);
                    }
                });
            }
        });
    }
});