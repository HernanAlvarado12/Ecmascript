import { line, jumpLines } from './line.js'

/**
 * PADDING
 * Es un metodo que nos permite agregar contenido a un string completando
 * cierta longitud sobre la cadena base, es decir, que añadimos ciertos
 * caracteres a nuestro string al inicio o final de la cadena, pero esta
 * se repita hasta completar la longitud pasada como parametro.
 * 
 * En caso de que la longited asignada sea menor a lo longitud actual de
 * la cadena, esta operacion no se realizara.
 * 
 * De igual forma, si el numero es muy grande y es mayor al conjunto de 
 * caracteres que hemos pasado como argumento, estos caracteres se repetiran
 * hasta completar la longitud dada. Para calcular la longitud final realizamos
 * el siguiente calculo.
 * 
 *  str = length
 *  maxLengthParameter
 *          str.length + maxLengthParameter 
 * 
 * 
 */
const gretting = 'Hello'
jumpLines(
    gretting.padStart(7, 'hi'), 
    gretting.padStart(11, 'hi'),
    gretting.padStart(13, 'complete')
)


jumpLines(
    gretting.padEnd(7, 'si'),
    gretting.padEnd(9, 'yeah'),
    gretting.padEnd(10, 'relax')
)