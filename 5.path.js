const path = require('node:path')

// unir rutas con path.join:
// -> unix /
// -> windows \

console.log(path.sep)


//Unir rutas con path.join:
//Así te crea la ruta sin necesidad de que tengas que 
//poner tu el / o \:
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath);



//Nombre del archivo:
const nombre = path.basename('/tmp/midu-secret-files/password.txt')
console.log(nombre);

//Nombre del fichero sin la extensión .txt del archivo:
const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(filename);



//Obtener la extensión: .jpg
const extensinsion = path.extname('image.jpg')
console.log(extensinsion)

