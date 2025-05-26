import { readFile } from 'node:fs/promises'

//Aquí esta haciendo 2 trabajos en paralelo: 
//Directamente me lee los dos archivos, y cuando acabes continua: 
Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('primer texto:', text)
    console.log('segundo texto:', secondText)
})

