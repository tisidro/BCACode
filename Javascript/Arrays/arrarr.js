//what happens when  you have an array inside another array

fruits = ["apple", "peach", "tomato"];

let arrArr = [fruits, ['carrot', 'parsnip']]

console.log(arrArr.length)//2

console.log(arrArr)//[ [ 'apple', 'peach', 'tomato' ], [ 'carrot', 'parsnip' ] ]



console.log(arrArr[0][2])//tomato