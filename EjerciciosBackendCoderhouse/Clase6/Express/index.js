// Definiendo endpoints con params

import express from 'express';

const app = express();
/*
Utilizamos los dos puntos(:)para indicar que queremos que ese sea el parametro.
Esto nos permite crear una ruta dinamica que pueda recibir cualquier parametro, en lugar
de tratar de adivinarlo. Ahora podemos ingresar cualquier nombre desde la url, en lugar
de tener que registrar 10000000000000000 rutas con 10000000000000000 nombres diferentes
 */

app.get('/unparametro/:nombre', (req, res) => {
    //:parametro ahora se encontrara dentro del objeto req.params
    console.log(req.params.nombre)
    res.send(`!Bienvenid@,${req.params.nombre}`)
})

app.get('/dosparametros/:nombre/:apellido', (req, res) => {
    //:nombre y :apellido se encontraran dentro del objeto req.params
    // Podemos definir nuestro endpoint cuantos parametros necesitemos!

    res.send(`El nombre completo es: ${req.params.nombre} ${req.params.apellido}`)
})

app.listen(8080, () => console.log("Listo para recibir peticiones"))