'use strict'
import { line, jumpLines } from './line.js'


const array = ['a', 'b', 'c']
const [one, two] = array
console.log(one, two, line())


const [shift, ...restOperator] = array
console.log(shift, restOperator, line())


const object = { oneObj: 'a', twoObj: 'b', threeObj: 'c' }
const { oneObj, twoObj, threeObj } = object 
console.log(oneObj, twoObj, threeObj, line())


const { oneObj: first, twoObj: second, threeObj: thirds } = object
console.log(first, second, thirds, line())


const meta = {
    title: 'Destructuring Assignment',
    authors: [
        { firstname: 'Hernan', lastname: 'Alvarado' },
        { secondname: 'David', secondLastname: 'Parra' },
        {
            extras: [
                { firstname: 'David', lastname: 'Parra', more: { age: '' } },
                { firstname: 'Hernan', lastname: 'Parra', more: { age: '' } }
            ]
        },
    ],
    publiser: {
        name: 'SitePoint',
        url: 'http://www.sitepointe.com/'
    }
}
const { title: document, authors: [{ firstname }], publiser: { name, url } } = meta
jumpLines(document, firstname,  name, url)


const { authors: [ firstItem, secondItem ]  } = meta
jumpLines(firstItem, secondItem)


const numbers = [];
const obj = { assignA: 1, assignB: 2 };
({ assignA: numbers[0], assignB: numbers[1] } = obj);
jumpLines(numbers)


const { assignA = 'firstLetter', z = 'LastLetter' } = obj
jumpLines(assignA, z)


let swapFirst = 1;
let swapSecond = 2;
[swapFirst, swapSecond] = [swapSecond, swapFirst];
jumpLines(swapFirst, swapSecond)


const nums = [1, 3, 2, 4];
[nums[1], nums[2]] = [nums[2], nums[1]]
console.log(nums)