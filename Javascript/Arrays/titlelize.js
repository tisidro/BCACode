//this function will take in a multi word string, split it, iterate over it and capitalize it, and join it back together then console.log it


function titlelize(string) {

    let splitter = string.split(" ")
    // splits string into array at empty space[ 'what', 'is', 'the', 'meaning', 'of', 'life?' ]

    let capString = splitter.map(capitalizer).join(" ")//map function that takes in capitalizer function below and applies it to each object in the array,then .join() puts the words back together that were split by splitter!
    console.log(capString)
    //function to capitalize first letter
    function capitalizer(word) {
        let firstLetter = word[0];

        let restOfWord = word.slice(1)

        return firstLetter.toUpperCase() + restOfWord.toLowerCase()//returns word with first letter cap, rest of word lowercase


    }
    return capString;

}

titlelize("what is the meaning of life");//What Is The Meaning Of Life