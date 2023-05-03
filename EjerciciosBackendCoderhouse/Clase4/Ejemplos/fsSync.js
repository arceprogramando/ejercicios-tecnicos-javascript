const fs = require('fs');
// Como comentamos en las diapositivas, fs nos permitira acceder a las operaciones para archivos

fs.writeFileSync('./ejemplo.txt', "Hola, Coders, estoy en un archivo");
/*
Primer operacion: para escribir un archivo, el primer argumento/parametro es la ruta y
Nombre del archivo sobre el que queremos trabajar. El segundo argumento es el contenido
!Super Sencillo

*/
if (fs.existsSync('./ejemplo.txt')) {//existsSync devuelve true si el archivo si existe y false si el archivo no existe.
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
    /*readFileSync lee el contenido del archivo , es importante que en el segundo parametro coloquemos el tipo de codificacion
    que utilizaremos para leerlo . En este curso solo abarcaremos utf-8
     */
    console.log(contenido)//El resultado sera lo que escribimos arriba en la linea 4: "Hola, Coders, estoy en un archivo"
    fs.appendFileSync('./ejemplo.txt', ' Mas contenido')
    /*AppendFileSync buscara primero la ruta del archivo , si no encuentra ningun archivo lo creara, en caso de si
    encontrarlo, en lugar de sobreescribir todo el archivo , solo colocara el contenido al final

    */
    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    // Volvemos a leer el contenido del archivo

    console.log(contenido)

    // Esta vez el contenido sera "Hola, Coders, estoy en un archivo Mas contenido"

    fs.unlinkSync('./ejemplo.txt');

    // Por ultimo esta linea de codigo eliminara el archivo, independientemente de todo el contenido que este tenga.
}
