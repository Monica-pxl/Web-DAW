//net mejor que http porque es más rápido
const { rejects } = require('node:assert')
const net = require('node:net')
const { resolve } = require('node:path')

//desiredPort, el puerto que yo quiera:
function findAvailablePort(desiredPort){

    return new Promise((resolve, reject) => {

        //Crear nuestro servidor:
        const server = net.createServer()

        //El servidor quiero que escuche en el desiredPort:
        server.listen(desiredPort, () => {


            //Si se ha podido escuchar:
            const port2 = server.address().port

            server.close(() => {

                resolve(port2)
            })

        })


        //Si falla, podemos hacer un evento para escucharlo:
        server.on('error', (err) => {

            //Si sale un error de que el puerto esta ocupado:
            if(err.code == 'EADDRINUSE'){

                //Se le pasa el 0 como puerto, y (.then) cuando esto
                //termine lo resolvemos con ese puerto:
                findAvailablePort(0).then(port => resolve(port))

            //Pero si aquí el error es diferente:
            }else{

                //Si el puerto ha reventado:
                reject(err)
            }
        })
    })
}

//Se exporta toda la función al (9.http.js):
module.exports = { findAvailablePort }

