import { readFile } from 'node:fs/promises'


(
    async () => {

        console.log('Leyendo el primer archivo...')
        const text1 = await readFile('./archivo.txt', 'utf-8')
        console.log('primer texto: ', text1)
        console.log('Hacer cosas mientras lee el archivo...')


        console.log('Leyendo el segundo archivo...')
        const secondText2 = await readFile('./archivo2.txt', 'utf-8')
        console.log('segundo texto: ', secondText2)
    }
)()