const express = require('express')
const app = express();

const { infoCursos } = require('./datos/cursos.js')

// Routers


const routerProgramacion = require('./routers/programacion.js')
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematica = require('./routers/matematicas.js')
app.use('/api/cursos/matematicas', routerMatematica)
// Routing

app.get('/', (req, res) => {
    res.send('Mi primer servidor')
})

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos))
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`El servidor esta escuchando por el ${PORT}`)
});