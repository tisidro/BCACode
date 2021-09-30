//to generate a random number with javascript

function randomNum(min, max) {
    let range = max - min + 1

    return Math.floor(Math.random() * range) + min
}
//Math.random() returns a number between 0 and 1 inclusive on the low end (includes 0), but exclusive on the high end (only goes to 0.999etc). 

//When we generate the range we have to add 1 to it ot bring our upper bound back in. 

//We multiply that range by Math.random() to give us a random number. 

//Then we Math.floor that equation to remove the decimal points, and get an integer between 0 and th range. 

//Finally we add the minimum value back on so that it's a random number between the max and min values.


console.log(randomNum(7, 10));

// will return a random number between 1 and 10 inclusive on both ends

//escaping back to javascript --when you put {} in a string you are escaping to JS in the string

console.log(`my random number is ${randomNum(1, 10)}`)