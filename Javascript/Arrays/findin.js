//For conciseness, people often define the filter function inline, like this:

let names = ['Alice', 'Bob', 'Carol', 'Charlie'];

let cName = names.find(function (word) {
    return word.charAt(0).toUpperCase() === 'C'
}
);

console.log(cName)//Carol