
//The .map iteration method returns a new array whose elements correspond to the elements of the original array.

let names = ['Alice', 'Bob', 'Charlie', 'Carol'];
let upper = function (word) {//can use any variable name here, it represents each item in the array
    return word.toUpperCase();
}
let bigNames = names.map(upper)

console.log(bigNames)//=> [ 'ALICE', 'BOB', 'CHARLIE', 'CAROL']

//math definition of map--change value from one thing to another and apply the transformation consistently across a data set. Mapping one array to another

let lower = function (word) {
    return word.toLowerCase();

}

let whisperNames = names.map(lower)

console.log(whisperNames)