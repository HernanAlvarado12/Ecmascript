import { line, jumpLines } from './line.js'

/**
 *  ASYN AND AWAIT
 * Es una forma de manejar la asincronia en javascript, es una instruccion
 * no bloquante en el flujo de trabajo que se procesa, pero si bloquea las
 * instrucciones que se encuentren dentro de la funcion que hace uso de 
 * esta sintaxis
 * 
 * cuando hacemos uso de async quiere decir que la funcion va a devolver una
 * promesa
 */
const functionAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Async message'), 2000)
    })
}


const showAsync = async message => {
    const something = await functionAsync();
    console.log(something, message)
}


console.log('Before')
showAsync('Middle message')
console.log('After')