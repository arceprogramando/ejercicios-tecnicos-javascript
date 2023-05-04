const fs = require('fs');

const fecha = new Date().toLocaleDateString();
const hora = new Date().toLocaleTimeString();

fs.writeFileSync('./fyh.txt', `Fecha: ${fecha}... Hora: ${hora}`, (error) => {
    if (error) return console.log(`Error en la escritura : ${error}`);

    fs.readFile('./fyt.txt', 'utf-8', (error, resultado) => {
        if (error) return console.log(`Error en la lectura: ${error}`)
        console.log(resultado)
    })
})