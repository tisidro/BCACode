
//method chaining is the practice of taking the result of one method, and immediately calling a method on that result without assigning it to a variable, again and again until you get a final result.let names = ['Alice', 'Bob', 'Charlie', 'Carol'];

//For example; we could take the results of a filter method, and chain a map method off it to return a modified subset of an array.
let names = ['Alice', 'Bob', 'Charlie', 'Carol'];

let upper = function (word) {//can use any variable name here, it represents each item in the array
    return word.toUpperCase();
}

let bigNames = names.map(upper)

console.log(bigNames)

function findC(string) {
    return string[0].toLowerCase() === 'c'//looks for c at 0 index (starts with)
}

console.log(findC("sypher"))//false
console.log(findC("cypher"))//true
console.log(findC("Rachel"))//false

function cap(word) {
    return word.toUpperCase()
}

let capC = names.filter(findC).map(cap)//method chaining...multiple calls linked together

console.log(capC)

//Method chaining can be very elegant, but it can also be very dense, making the code harder to understand, test, and debug.

//"Unspooling" a method chain into intermediate variables can make the code easier to follow, but it can also make it much more verbose and obscure the algorithm.
