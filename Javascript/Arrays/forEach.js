
let names = ['Alice', 'Bob', 'Carol', 'Charlie']

function printUpper(name) {
    console.log(name.toUpperCase())//function takes in a name from the array, and upperCases it
};

names.forEach(printUpper)//ALICE, BOB, CAROL, CHARLIE




let cheeses = ["blue cheese", "cheddar", "mozzarella"];



cheeses.forEach((chez, index) => { //takes a string, 'chez' from a specific 'index' in an array and performs the action to console.log chez.toUpperCase
    console.log(chez.toUpperCase())
}
) //BLUE CHEESE, CHEDDAR, MOZZARELLA