import { jumpLines } from './line.js'

jumpLines

const first = 5
const second = 2
console.log(first ** second)


const nums = [1,2,3,4]
const map = [
    { name: 'Hernan', age: 19 },
    { name: 'David', age: 19 },
    { name: 'Alvarado', age: 19 },
    { name: 'Parra', age: 19 }
]
const personCompare = { name: 'Hernan', age: 19 }
jumpLines(nums.includes(3), map.includes(personCompare))

/**
 * Para verificar que una propiedad existe dentro de un objeto podemos hacer
 * uso de la propiedad de Object llamada hasOwnProperty, de igual forma
 * podemos usar Object.getOwnPropertyDescriptors para ver todas las propiedades
 * que tiene el objeto
 */
