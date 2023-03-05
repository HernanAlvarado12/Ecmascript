/**
 * Object.fromEntries
 * Convierte un array de array en un objecto
 */
const entries = [
    ['name', 'Hernan'],
    ['age', 19]
]

const person = {
    name: 'Hernan',
    age: 19
}

console.log(
    Object.fromEntries(entries),
    Object.entries(person)
)