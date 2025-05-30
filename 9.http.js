const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

const server = http.createServer((solicitud, respuesta) => {

    /*Cada vez que llegue una solicitud, vamos a poder responderle: */
    console.log('request received')
    respuesta.end('Hola mundo')
})


//Yo quiero un puerto en principio uno determinado:
findAvailablePort(3000).then(port => {

    server.listen(port, () => {

        console.log(`server listening on port http://localhost:${port}`)
    })
})


//Escuchar:
//Si pongo puerto 0, me buscará el primer
//puerto que esté disponible
//server.listen(0, () => {
    //console.log(`server listening on port http://localhost:${server.address().port}`)
//})
