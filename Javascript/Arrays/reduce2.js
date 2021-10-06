//how  many letters here discounting spaces?

let sentence = "Sphynx of black quartz judge my vow"

//first split on spaces, get array of words, now use reduce to count how many char in each word 

//now call reduce on it. totLetters is the accumulator
//a callback function is a function being used as an argument by another function.  
let counting = (totLetters, nextWord) => {
    return totLetters + nextWord.length
}


let numChar = sentence.split(' ').reduce(counting, 0)//zero is where you start


/* another way to write the function

let numChar = sentence.split(' ').reduce((totLetters, nextWord) => {
    return totLetters + nextWord.length
}, 0)*/

console.log(numChar)//29
