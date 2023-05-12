// Primero cree mi carpeta clase 7

// npm init -y para crear el package.json

// npm install express


import express from "express";

const app = express();
const server = app.listen(8080, () => console.log("Listening on PORT 8080"));

// Primero tenemos que configurar nuestro servidor para que pueda recibir informacion del cliente

app.use(express.json())//Como indica el metodo ahora, el servidor podra recibir jsons al momento de la petcion.
app.use(express.urlencoded({ extended: true }))//Permite que se pueda enviar informacion tambien desde la URL

let users = []
// Aqui almacenaremos los users que vayamos creando. Los crearemos a partir del metodo POST

//Ahora, en lugar de llamar app.get, llamaremos app.post,indicando que queremos CREAR un recurso(user)
app.post('/api/user', (req, res) => {
    let user = req.body; //Recordemos que req.body es el JSON que enviara el usuario al momento de hacer la peticion
    //Podemos validar que se cumplan ciertos campos antes de agregarlo.
    if (!user.first_name || user.last_name) {//Preguntamos si falto nombre o apellido
        /*
        Ya que fue un error donde el cliente se equivoco al enviar informacion incompleta, el estatus que devolveremos sera un status 400. Este lo colocaremos antes del .send como se indica mas abajo.
        */
        return res.status(400).send({ status: "error", error: "incomplete values" })
    }

    // En caso de que no haya entrado al if, significa que el cliente si envio los campos completos
    //Procedemos a agregarlo al arreglo de users

    user.push(user);
    res.send({ status: "success", message: "User created" })//El status 200 viene implicito cuando no lo indicamos
})
