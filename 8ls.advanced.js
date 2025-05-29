const fs = require('node:fs/promises')

//Se importa el módulo path, que proporciona 
// utilidades para trabajar con rutas de archivos y directorios:
const path = require('node:path')

//Se importa el módulo picocolors, que se utiliza para aplicar colores 
// a la salida en la consola, mejorando la legibilidad.
const pc = require('picocolors')

//Es un array que contiene los argumentos de la línea de comandos:
//se refiere al tercer argumento (el primero es el path de Node.js y 
// el segundo es el path del script):
const folder = process.argv[2] ?? '.'



//Se define una función asíncrona llamada ls que toma un argumento folder, 
// que es la carpeta que se va a listar:
async function ls (folder) {

  let files


  //DIRECTORIO:
  try {

    //Intenta leer el contenido del directorio especificado por folder. 
    // Devuelve una lista de nombres de archivos y carpetas:

    //ASINCRONIA SECUENCIAL: hasta que no lea el directorio No continuamos:
    files = await fs.readdir(folder)

  } catch {

    //Si ocurre un error al leer el directorio (por ejemplo, si no existe), 
    // se captura el error y se muestra un mensaje de error en rojo 
    // en la consola. Luego, el proceso se termina con process.exit(1):
    console.error(pc.red(`No se pudo leer el directorio ${folder}`))
    process.exit(1)
  }



  //ARCHIVOS:
  //Se utiliza map para crear un nuevo array de promesas, donde cada promesa 
  // corresponde a un archivo en el directorio. Cada archivo se procesa de 
  // manera asíncrona.

  //PARALELO: Recuperar todos los archivos del directorio:
    const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats



    try {

      //Obtiene información sobre el archivo (como tamaño, tipo, fecha de modificación):
      stats = await fs.stat(filePath) // status - información del archivo

    } catch {

        //Si ocurre un error al obtener la información del archivo, se muestra un mensaje 
        // de error y se termina el proceso:
      console.error(`No se pudo leer el archivo ${filePath}`)
      process.exit(1)
    }



    //Verifica si el archivo es un directorio:
    const isDirectory = stats.isDirectory()

    //Se asigna 'd' si es un directorio, o 'f' si es un archivo:
    const fileType = isDirectory ? 'd' : 'f'

    //Obtiene el tamaño del archivo en bytes:
    const fileSize = stats.size.toString()

    //Obtiene la fecha de la última modificación y se convierte a una cadena legible:
    const fileModified = stats.mtime.toLocaleString()

    // Devuelve una cadena formateada que incluye el tipo de archivo, el nombre del archivo, el tamaño y 
    // la fecha de modificación, aplicando colores a cada parte:
    return `${pc.bgMagenta(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`
  })



  //Espera a que todas las promesas en filesPromises se resuelvan y devuelve 
  // un array con la información de todos los archivos:
  const filesInfo = await Promise.all(filesPromises)


  //Itera sobre el array filesInfo y muestra cada información de archivo en la consola:
  filesInfo.forEach(filesInfo => console.log(filesInfo))
}


//Finalmente, se llama a la función ls pasando la carpeta especificada como argumento:
ls(folder)
