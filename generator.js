/**
 * GENERATOR
 * 
 */

function* generator(nums) {
    for(const number of nums) {
        yield number
    }
}

const gener = generator([1,2,3,4,5])
console.log(gener.next(), gener.next())