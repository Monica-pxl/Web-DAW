import { platform, release, arch } from 'node:os'

console.log('Informacion del sistema operativo')
console.log('--------------')

console.log('Nombre de sistema operativo', platform())
console.log('Version del sistema operativo', release())
console.log('Arquitectura', arch())