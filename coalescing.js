/**
 * OPERADOS COALECENTE NUL (??)
 * Es un operador que evalua si una expresion o valor es null o undefined para
 * retornara otro valor.
 * 
 * 
 */

const foo = null ?? 'Operator coalescing'
console.log(foo)

const person = {
    name: 'Hernan',
    age: 19
}

console.log(person.lastname ?? 'Alvarado');