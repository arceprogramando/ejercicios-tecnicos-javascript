/*Una de las cosas más importantes en el desarrollo web frontend es conectarse a una API.
Actualmente, se utiliza el método fetch ("buscar" en español), que es una promesa que permite hacer solicitudes HTTP
a un servidor para obtener datos, recursos y realizar acciones. Con fetch se puede realizar una petición a una API
mediante una URL, y luego manejar la respuesta obtenida en el formato deseado, como JSON.
Para enviar los datos obtenidos al DOM, se puede utilizar el método .innerHTML o .textContent
para insertar el contenido de los datos dentro de un elemento HTML, ya sea un elemento de texto
o un elemento HTML. Por ejemplo, se puede crear un elemento de texto o de HTML utilizando el
método .createElement, y luego insertar el contenido de los datos dentro de él utilizando el método .
textContent o .innerHTML. Después, se puede utilizar el método .appendChild para agregar el elemento creado al DOM
y así mostrar los datos obtenidos de la API en la página web.
Además, se puede utilizar el método .setAttribute para establecer atributos de los elementos HTML,
 como la clase o el id, y así personalizar el estilo o manipular el elemento mediante JavaScript.
*/


const url = "https://api.github.com/users/arceprogramando";

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const profileDiv = document.getElementById("profile");
        const html = `
      <h2>${data.name}</h2>
      <img src="${data.avatar_url}" alt="Avatar">
      <p>Username: ${data.login}</p>
      <p>Location: ${data.location}</p>
      <p>Repositorios Publicos: ${data.public_repos}</p>
    `;
        profileDiv.innerHTML = html;
    })
    .catch(error => console.error(error));

/*El ejercicio nos pide hacer una conexion a la Api de github , en la actualidad usamos fetch para traer los datos.
Primero guardamos en la constante url la direccion en la cual vamos a hacer nuestra peticion ,esta es mi pagina de github
inicializamos fetch , donde dentro vamos a guardar la constante url que guardamos anteriormente que contiene mi direccion
con esto hacemos una solicitud http a la api de github , lode dentro es lo que queremos solicitar
fetch devolvera una promesa en la cual resuelve con un objeto response,  dentro del response utilizamos el metodo json para poder
obtener los datos como un objeto de  , la primera then se ejecuta el codigo que maneja los datos,
e imprimimos el console.log(de la totalidad de la data traida)
despues  creamos una constante que llamamos profileDiv, y guardamos la busqueda de ide en el documento (nuestro html en el cual tenemos
un div con id="profile")
despues creamos una constante con el html dentro de backstick que queramos mostrar 
despues usamos nuestro profileDiv que guarda el id profile, y le usamos el metodo innerHTML. Le guardamos dentro nuestro html
a lo ultimo usamos nuestra parte catch que es donde se guarda el error de nuestra funcion fetch
*/