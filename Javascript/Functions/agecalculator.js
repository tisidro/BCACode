//Write a function that calculates the number of seconds old you are when given your age
//i used process.argv to allow user input-- it is in index position 2 of an array that contains at index 1 the address of the node install and in index 1 the file address

let age = process.argv[2];

//let age = 56; -- alternately you could just type your age number here

let ageCalc = () => {

    let weeks = age * 52;
    let days = weeks * 7;
    let hours = days * 24;
    let seconds = hours * 3600;


    return `Congrats! You are ${seconds} seconds old!`;

}

console.log(ageCalc(age)) // should print "You are 852055200 seconds old." to the console


