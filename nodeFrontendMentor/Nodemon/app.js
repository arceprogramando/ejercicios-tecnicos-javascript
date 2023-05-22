const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Estoy Aprendiendo NodeJs con NODEMON');
})

const PORT = 3000;


server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
})