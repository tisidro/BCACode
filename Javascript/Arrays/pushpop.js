//push and pop methods actually change (mutate) the array. Slice returns a new array. Splice though, also mutates.

let fruits = ["apple", "banana", "cherry"];
fruits.push("pineapple");
console.log(fruits) //=> ["apple", "banana", "cherry", "pineapple"])

fruits.push("fig", "coconut", "lime")

console.log(fruits)// => ['apple','banana','cherry','pineapple','fig','coconut','lime' ]

console.log(fruits.pop())// => "lime"--the last fruit

let lastFruit = fruits.pop()//pop removes last item, it does not take any inputs

console.log(lastFruit) //=> "coconut" --because we already had removed lime and now coconut is the last.

console.log(fruits.shift('pear'))//shift removes items from the beginning of the array

console.log(fruits)//[ 'banana', 'cherry', 'pineapple', 'fig' ]

fruits.unshift('plums')//unshift adds an item to the beginning of the array [ 'plums', 'banana', 'cherry', 'pineapple', 'fig' ]
console.log(fruits)