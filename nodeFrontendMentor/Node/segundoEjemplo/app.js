const http = require('http');
const cursos = require('./cursos');

const servidor = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return manejarSolicitudGet(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            console.log('El método ingresado no puede ser manejado por el servidor');
            res.statusCode = 405; // Método no permitido
            res.end();
    }
});

function manejarSolicitudGet(req, res) {
    const path = req.url;

    if (path === '/') {
        res.statusCode = 200;
        res.end('Bienvenidos a mi primer servidor y API creados con Node.js');
    } else if (path === '/cursos') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(cursos.infoCursos));
    } else if (path === '/cursos/programacion') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(cursos.infoCursos.programacion));
    } else if (path === '/cursos/matematica') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(cursos.infoCursos.matematicas))
    } else {
        res.statusCode = 404;
        res.end('El recurso solicitado no existe o no fue creado');
    }
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;
    if (path === '/cursos/programacion') {
        res.end('EL servidor recibio una solicitud POST para')

    }
}
const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}`);
});