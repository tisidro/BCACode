//similar to find, but filter returns an ARRAY of ALL matching items

let names = ['Tina', 'Finny', 'Porchie'];

let beginsWithT = function (word) {
    return word.charAt(0).toUpperCase() === 'T';
};

let tName = names.filter(beginsWithT);

console.log(tName)//=> ['Tina']

//this will not mutate names array...just return a copy of the array w/ specified values