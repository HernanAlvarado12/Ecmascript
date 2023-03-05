import { line, jumpLines } from './line.js'


const countries = {
    MX: 'Mexico',
    CO: 'Colombia',
    CL: 'Chile',
    PE: 'Peru'
}


jumpLines(
    Object.entries(countries), 
    Object.keys(countries),
    Object.values(countries)
)

/**
 * Retorna el indice del elemento y un entry conformado por
 * la llave y el valor:
 *  Entry <Key <T>, Value <T>> 
 */
Object.entries(countries).forEach((value, key) => {
    console.log(`index: ${key}, entry: ${value}, array: ${value[0]}`)
})
console.log(line())


Object.keys(countries).forEach(key => {
    console.log(`Key: ${key}, value: ${countries[key]}`)
})
console.log(line())


Object.values(countries).forEach(value => {
    console.log(`value: ${value}`)
})