/**
 * OPTIONAL CHAINING
 * Es un operador que nos permite acceder a las propiedades o posibles
 * propiedades que pueda tener un objeto, pero sin lanzar un excepcion
 * o error, lo que hacemos en añadir el signo de pregunta antes de 
 * acceder a la posible propiedad para que este valide si exista o para
 * el dado caso que no exista.
 * 
 * Tambien podemos ejecutar metodos que se encuentren dentro de un objeto
 * Este funcionalida inicia a realizar su proceso a partir del segundo nivel
 * ya que en el dado caso de que no exista un elemento sobre el primer nivel
 * este retornara el valor de undefined, pero esto solo es para el primer
 * nivel, si queremos validar mas niveles a profunidad debemos hacer uso
 * de esta funcionalidad para que no exista un fallo o corto dentro del hilo
 * de ejecución.
 * 
 * Esta tecnica funciona apartir del corto circuito como lo son generados
 * el AND y el OR.
 * 
 * Podemos hacer uso de esta funcionalidad para acceder a un metodo para
 * posteriormente ejecutarlo, pero en dado caso de que se encuentre un 
 * propiedad con dicho nombre este lanzara una excepcion TypeError.
 * 
 * De igual forma podemos usar esta tecnica sobre los arreglos y matrices.
 * 
 * IMPORTANTE
 * Cuando se hace uso del encadenamiento opcional y el valor anterior del
 * operador o el valor sobre el cual vamos a realizar la opcionalida es
 * null o undefined la expresion no se evaluara y retornara el valor de 
 * undefined
 * 
 */
const users = {
    david: {
        age: 19
    },
    hernan: {
        age: 19
    }
}
console.log(
    users.david.age,
    users?.alvarado?.age
)


const adventure = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
}
console.log(adventure.dog, adventure.someMethodExexute?.())


const nullObj = null
let x = 0
const prop = nullObj?.[x ++]
console.log(prop)


const customer = {
    name: 'Carl',
    details: {
        age: 82,
        location: 'Paradise falls'
    }
}

console.log(customer.details?.ubication?.city, customer.name?.getName?.())
