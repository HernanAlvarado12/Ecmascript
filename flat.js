/**
 * FLAT 
 * Metodo que nos permite 'aplanar' los niveles de profundidad de los 
 * elementos que se encuentran dentro de un array.
 * 
 *  Cuando no conocemos la cantidad de niveles total, pero deseamos aplanar
 *  todo el arreglo podemo pasar como parametro el valor de Infinity
 * 
 * 
 * FLATMAP
 * Metodo que retorna una matriz formada al aplicar el proceso a una matriz
 * previa. Transformando un array de un solo nivel.
 * Primero genera la operacion de transformacion dentro del array de llegada
 * y luego lo convierte en una matriz de un solo nivel
 * 
 */

const nums = [1, 2, 3, 4, [5, 6, [7, 8, 9, [10, 11, 12, [13]]]]]

console.log(nums.flat(Infinity))
console.log(nums.flat(Infinity).map(num => [num, num * 2]))

