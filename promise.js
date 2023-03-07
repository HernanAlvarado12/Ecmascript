/**
 * PROMESAS
 * 
 * Promise.all => sirve para manejar varias promesas al mismo tiempo, recibe
 * como argumento un arreglo de promesas, pero en caso de que una promesa
 * falle todo el proceso se cortara
 * 
 * 
 * Promise.allSettled => es igual al anterior, pero su unica diferencia es que
 * no importa si una promesa ingresada retorna un error este seguira en la
 * efecución de las demas.
 * 
 * 
 * Promise.any => Es un metodo estatico que solo resuelve o retorna una sola
 * promesa de una entrada de promesas (arreglo), pero dicha promesa debe ser
 * correcta
 * 
 */
const firstPromise = new Promise((resolve, reject) => reject('Reject'))
const secondPromise = new Promise((resolve, reject) => resolve('Resolve'))
const thirdPromse = new Promise((resolve, reject) => resolve('Resolve second'))


Promise.allSettled([firstPromise, secondPromise, thirdPromse])
       .then(response => console.log(response))


Promise.any([firstPromise, secondPromise, thirdPromse])
       .then(promise => console.log(promise))

