const http = require('node:http')

const server = http.createServer((solicitud, respuesta) => {

    /*Cada vez que llegue una solicitud, vamos a poder responderle: */
    console.log('request received')
    respuesta.end('Hola mundo')
})

//Escuchar:
//Si pongo puerto 0, me buscará el primer
//puerto que esté disponible
server.listen(0, () => {
    console.log('server listening on port ')
})