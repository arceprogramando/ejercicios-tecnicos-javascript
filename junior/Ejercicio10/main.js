/**
 * Devuelve un fragmento del texto especificado según el número de caracteres indicados.
 * @param {string} texto - El texto a recortar.
 * @param {number} caracteres - La cantidad de caracteres a devolver.
 * @returns {string} El fragmento del texto recortado.
 */


const devolverTexto = (texto, parametro) => {
    if (!(typeof texto === "string")) {
        console.log(`El texto :"${texto}" ingresado no es un string`)
        return
    }

    if (!parametro) {
        console.log("Falta el Parametro");
        return
    } else {
        if (!(typeof parametro === "number")) {
            console.log(`El parametro ${parametro} no es un numero`);
            return
        }
    }

    console.log(texto.substring(0, parametro));
}

devolverTexto("Hola", 30)
devolverTexto(35, 45)
devolverTexto("Hola Mundo", "hola")
devolverTexto("Hola Mundo", 5)

/*En este ejercicio nos piden en base a un texto , entregar el total de palabras que entre en el parametro, por ejemplo
si es una frase hola como estas y elijo 5 va a traer "hola " hola + " " el espacio ya que lo toma como un caracter
podriamos quitarselo mas tarde usando una expresion regular que ignore los espacios, por ahora lo dejamos asi
Empezamos creando una funcion flecha llamada devolverTexto(que va a contener los dos parametros, uno para el texto y otropara la cantidad de letras que va a recibir), primero empezamos con la validacion en la cual si el tipo de texto es igual a una string da 
verdadero , lo invertimos(en ambos casos) para asi pasar a dar por consola que el texto ingresado no es un string , retornamos saliendo de la funcion si entra en esta validacion
despues validamos de que si parametro es false, vamos a mostrar por consola el falta el parametro y retornamos a salir de la funcion
sino abrimos otra validacion en la cual invertimos el si el tipo de parametro es completamente igual a number, muestra por consola
el parametro no es un numero y pasamos por el consola el return hacia fuera de la funcion
terminado las validaciones
hacemos con un console.log(a el texto , le usamos el metodo substing(que lo que hace es hacer lo que nosotros queriamos hacer
estraer de cierta parte de un string en base a parametros  nuestra necesidad desde el numero 0 que es el inicio del string hasta el parametro, que nosotros pasamos en nuestra funcion))

*/