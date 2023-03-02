'use strict'
const person = {
    name: 'Hernan',
    age: 19
}

const personLast = {
    lastname: 'Alvarado'
};

({ lastname: person.lastname } = personLast);
person.index = 1
console.log(person)
