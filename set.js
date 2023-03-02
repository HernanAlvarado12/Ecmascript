/**
 * SET
 * Es una estructura de datos que nos permite tener un conjunto de datos
 * en la cuales los datos que se encuentran dentro del set no hayan
 * duplicados.
 * 
 *  has => verifica si existe el dato
 *  add => añade un nuevo elemento al set
 *  delete => elimina un elemento dentro del set
 *  clear => elimina todos los datos del set
 *  size => retorna el valor de la longitud del set
 *  
 * 
 */

const set = new Set()
set.add('items 1')
    .add('items 2')
    .add('items 3');

console.log(set)
console.log(set.values())
console.log(set.entries())

const repeat = new Set([1,2,1,2,3,3,4,2])
console.log(repeat)