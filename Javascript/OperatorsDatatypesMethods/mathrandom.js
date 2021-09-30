//a little template for quick use of code for generating a random number

function randomNum(min, max) {
    let range = max - min + 1

    return Math.floor(Math.random() * range) + min
}

randomNum(1, 10) //this would generate rando # bet 1-10, add your ranges as needed!
//You can put any 2  numbers  here
//Math.random() returns a number between 0 and 1 inclusive on the low end (includes 0), but exclusive on the high end (only goes to 0.999etc).
//the reason you add 1 is to make it inclusive of the 1 
//this makes it exclusive on the low end...but Math.floor(removal of decimal places) that makes it inclusive on the low end again