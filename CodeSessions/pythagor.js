/*---------Readline----------*/

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

//rl is readlineInterface

function ask(qText) {
    return new Promise((res, rej) => {
        rl.question(qText, res);

        //qText is questionText
    });
}

/*-----------Function <Block-----------*/
//Version 1:

//take square root method Math.sqrt()

function pythagExp(a, b) {

    //.pow(a,num)takes a variable as its first parameter and the second parameter is the power to which it will be raised
    console.log(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)))
}


//Version 2:

function pythagTwo(a, b) {

    //b**2 raises b to the power of 2, Math.sqt takes the square root of it
    console.log(Math.sqrt(a ** 2) + (b ** 2));
}


//version 3
//easy way to do it,don't need Async as you enter your values directly (here, 3 and 4)
//console.log(Math.hypot(3,4))

/*------------Async---------*/

start()

async function start() {

    console.log("Let's do some HS Math using Pythagorean Theorem!")

    //assign sideA to a variable
    let sideA = await ask("Enter Side A please!\n")

    //this parses a string argument and returns an integer. this must be done because all user input is a string. parseInt turns the string "2" into a number 2. 

    //Although Math.hypot handles the string input, it's still a good practice to parse user input so it's a true number
    sideA = parseInt(sideA)

    let sideB = await ask("Enter Side B please!\n")

    sideB = parseInt(sideB)
    //turning string to true number again

    //print answer to console
    console.log("SideC = " + Math.hypot(sideA, sideB));

    process.exit()
}