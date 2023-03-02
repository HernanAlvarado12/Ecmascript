
class Person {

    #name
    #age
    static CONSTDATA = 1
    static #SERIALVERSIONUID = 12345

    constructor(name, age) {
        this.#name = name
        this.#age = age
    }

    toString() {
        return `name: ${this.#name}, age: ${this.#age}, serial: ${Person.#SERIALVERSIONUID}, const: `
    }

    static #isVerified() {
        return `Yeah...`
    }

    get getName() {
        return `${this.#name}`;
    }

    set setName(name) {
        this.#name = name
    }

    get getAge() {
        return this.#age
    }

    set setAge(age) {
        this.#age = age
    }
}


class Student extends Person {

    #number

    constructor(name, age, number) {
        super(name, age)
        this.#number = number
    }

    toString() {
        return super.age;
    }
}


const person = new Person('Hernan', 19)
console.log(person.toString())
console.log(person.getName)


const student = new Student('David', 19)
console.log(student.toString())

