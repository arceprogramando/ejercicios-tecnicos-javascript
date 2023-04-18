/*Actualmente solo usare node para hacer el ejercicio, y si es necesario Manipular Dom , creare el archivo html segun la necesidad*/

/*Filtrado sobre correo electronicos y guardarlo en un Nuevo Array, utilizar expresion regular para detectar
si cada string contiene un correo electronico valido y diga que correo no son validos*/

const listaDeNombresYCorreos = [
    "Arceprogramando333@gmail.com",
    "Ana Gutierrez (ana333@hotmail.com)",
    "pedro@example",
    "maria@example.com",
    "jose@example.com",
    "martadiaz.com"
];

/*Esta es la forma en que se hacen las expresioens regulares a la hora de querer dar limitaciones sobre una busqueda
o filtrado, es guardada en regexCorreoElectronico para ser llamado a futuro ya que , para diferentes necesidades
diferentes regex 
*/

const regexCorreoElectronico = /^\w+@[\w-]+\.[a-zA-Z]{2,}$/;

// /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/
/*
\b: indica un límite de palabra, asegurándose de que la cadena comienza y termina con un carácter de palabra (letra, número o guión bajo).
[A-Za-z0-9._%+-]+: busca uno o más caracteres de letra mayúscula o minúscula, números, y los siguientes caracteres especiales: punto (.),
 guión bajo (_), porcentaje (%) y signos más (+) o menos (-). Este es el formato permitido para el nombre de usuario de un correo electrónico.
@: busca el caracter @ que es requerido en un correo electrónico.
[A-Za-z0-9.-]+: busca uno o más caracteres de letra mayúscula o minúscula, números, y los siguientes caracteres especiales: punto (.) y guión (-). Este es el formato permitido para el dominio del correo electrónico.
\.: busca un punto (.) literal, que es necesario para separar el dominio de nivel superior.
[A-Z|a-z]{2,}: busca dos o más caracteres de letra mayúscula o minúscula, que son el dominio de nivel superior permitido en un correo electrónico. La barra vertical (|) indica "o", lo que significa que la expresión regular acepta tanto mayúsculas como minúsculas.
\b: otra vez, indica un límite de palabra para asegurarse de que no hay caracteres adicionales al final del correo electrónico.
/g: el modificador global busca todas las coincidencias de la expresión regular en una cadena de texto.


https://regexr.com/
*/

const listaDeCorreos = listaDeNombresYCorreos.reduce((result, element) => {
    // console.log(element)

    // const match = element.test(regexCorreoElectronico);
    const match = regexCorreoElectronico.test(element)
    // console.log(match)
    if (match) {
        result.push(element);
    }
    return result;
}, []);




console.log(listaDeCorreos);

/* Despues de haber creado nuestra expresion regular para poder usarla dentro de nuestra funcion podemos empezar a crear 
el espacio para guardar la lista de Correos que sera mostrado este sera listaDeCorreos, dentro de ella estara funcionando
una funcion flecha en la cual a listaDeNombresYCorreos , se la hace un .reduce que es una funcion de orden superior de javascript
en la cual se le van a pasar los parametros de result y element 
dentro se creara la constante match que se utilizara otra funcion de orden superior llamada match con nuestro regex de correo electrnico
if match es verdadero , si existe concidencias ,
se hara un push de result en el cual se guardara el match en el indice 0;

retornando result
,  */