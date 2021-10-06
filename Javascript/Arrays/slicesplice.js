
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']

// this means "slice from item 1 to item 3"--not including 3
console.log(fruits.slice(1, 3)) //=> [ 'banana', 'cherry' ]

console.log(fruits)//after slicing, when you call fruits array it has not changed: [ 'apple', 'banana', 'cherry', 'date', 'elderberry' ]

// this means "slice from item 2 to the end"
console.log(fruits.slice(2)) //=> [ 'cherry', 'date', 'elderberry' ]

console.log(fruits.splice(1, 3))// splice pulls out items from 1-3[ 'banana', 'cherry', 'date' ]

console.log(fruits)//after splicing, the array has changed. Since you removed [ 'banana', 'cherry', 'date' ] what is left is [ 'apple', 'elderberry' ]. So the initial array has changed