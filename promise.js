/**
 * PROMESAS
 * 
 * Promise.all => sirve para manejar varias promesas al mismo tiempo, recibe
 * como argumento un arreglo de promesas, pero en caso de que una promesa
 * falle todo el proceso se cortara
 * 
 * Promise.allSettled => es igual al anterior, pero su unica diferencia es que
 * no importa si una promesa ingresada retorna un error este seguira en la
 * efecución de las demas.
 * 
 */

const firstPromise = new Promise((resolve, reject) => reject('Reject'))
const secondPromise = new Promise((resolve, reject) => resolve('Resolve'))
const thirdPromse = new Promise((resolve, reject) => resolve('Resolve second'))


Promise.allSettled([firstPromise, secondPromise, thirdPromse])
       .then(response => console.log(response))
