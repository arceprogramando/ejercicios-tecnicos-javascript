const http = require('http');
const { infoCursos } = require('./cursos');

const server = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return manejarSolicitudGet(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            res.statusCode = 501;
            return res.end(`El método ${method} no puede ser manejado por el servidor`);
    }
});

function manejarSolicitudGet(req, res) {
    const path = req.url;

    if (path === '/') {
        return res.end('Bienvenidos a mi primer server y API creados con Node.js');
    } else if (path === '/cursos') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(infoCursos));
    } else if (path === '/cursos/programacion') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(infoCursos.programacion));
    } else if (path === '/cursos/matematica') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(infoCursos.matematicas));
    }

    res.statusCode = 404;
    return res.end('El recurso solicitado no existe o no fue creado');
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;

    if (path === '/cursos/programacion') {
        let cuerpo = '';

        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);
            // Convertir un objeto a Javascript
            cuerpo = JSON.parse(cuerpo);
            console.log(typeof cuerpo);
            return res.end('El server recibió una solicitud POST para /cursos/programacion');
        });

        res.statusCode = 200;
    }
}

const PUERTO = 3000;

server.listen(PUERTO, () => {
    console.log(`El server está escuchando en el puerto ${PUERTO}`);
});