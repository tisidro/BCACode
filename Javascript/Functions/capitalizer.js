//Write a function that capitalizes the first letter of any word or phrase

function capFirst(string) {
    let fLetter = string.slice(0, 1);
    let rWord = string.slice(1);

    wordCap = (fLetter.toUpperCase()) + (rWord.toLowerCase());

    return wordCap;
}

console.log(capFirst("hello"));
console.log(capFirst("Hey There!"));
console.log(capFirst("hEY there!"));
console.log(capFirst("hey therE!"));

