let names = ['Alice', 'Bob', 'Carol', 'Charlie'];

let beginsWithC = function (word) {
    return word.charAt(0).toUpperCase() === 'C';//LOOKS FOR WORD W/ "C" " AS FIRST LETTER--RETURNS MATCHING ITEM
};

let cName = names.find(beginsWithC);

console.log(cName)//=> 'Carol'



let cheeses = ["blue cheese", "cheddar", "mozzarella"];

cheeses.forEach((chez, index) => {
    console.log(chez.toUpperCase())
}
)  //BLUE CHEESE CHEDDAR MOZZARELLA

let asiago = cheeses.find((item, chez) => {
    return item === 'asiago' //if there's an asiago it will return it, otherwise it returns undefined

})

console.log(asiago)//undefined

let ellaCheese = cheeses.find((item) => {
    return item.includes('ella')
})

console.log(ellaCheese)//MOZZARELLA

let newArr = cheeses.map((item) => {
    return item.toUpperCase()
})

console.log(cheeses)
console.log(newArr)