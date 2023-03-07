import { line, jumpLines } from './line.js'

/**
 * Expresiones regulares
 * Las expresionse regulares son un conjunto de caracteres que nos permite
 * validar y comprobar el formata de un texto, esto con el fin de saber si
 * la cadena de texto coindice con un patron de busqueda.
 * 
 * Cuando hacemos uso de los parentesis este nos permite la agrupacion de 
 * datos
 */
const regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const matcher = regex.exec('2023-33-20')

//console.log(matcher)
//console.table(matcher)

const regexApple = new RegExp('Apple', 'g')
const fruits = 'Apple, Banana, Kiwi, Apple, Orange, etc...'
console.log(regex, regex.global)

for(const match of fruits.matchAll(regexApple)) {
    console.log(match)
}
