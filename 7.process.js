//process: 
//argumentos de entrada a la hora de
//ejecutar el comando:

//process.argv: argumentos que va a recibir
//en la linea de comandos: 
console.log(process.argv)


//controlar el proceso y su salida:
process.exit(1)


//controlar eventos del proceso:
process.on('exit', () => {
    //limpiar los recursos
})


//current working directory
// nos dice desde que carpeta estamos ejecutando el proceso:
console.log(process.cwd())


//platform:
console.log(process.env.PEPITO)
