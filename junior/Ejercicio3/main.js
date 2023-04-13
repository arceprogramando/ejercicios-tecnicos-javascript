/*Escribe la funcion displayName() que recibe como argumentos un objeto y muestra por
consola el nombre y apellido de la persona. Utilia destructuring y Template Strings */

let object = {
    nombre: "Felipe",
    apellido: "Arce"
}

function displayName({ nombre, apellido }) {
    console.log(`${nombre} ${apellido}`)

}

displayName(object)

/* En este ejercicio primero declaramos un objeto que tranquilamente puede venir de otros lados
pero actualmente para este ejercicio lo generamos nosotros y empezamos con la funcion
esa funcion se va a llamar display name y dentro va a contener unas llaves que van a representar
al objeto y contiene la entrada de dos valores o keys , nombre y apellido , la unico que realiza esta
funcion es la de por consola , mostrar lo guardado en la key nombre y lo guardado en la key apellido

despues usamos la funcion displayName( con el objeto creado al principio)
*/