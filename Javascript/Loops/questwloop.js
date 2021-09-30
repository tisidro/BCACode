//here's a loop with user input that runs 3x then runs out of patience :)

const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((res, rej) => {
        readlineInterface.question(questionText, res);
    });
}

async function quest() {

    let count = 0;

    let name = await ask("What is your name?");

    let quest = await ask("What is your quest?");

    let color = await ask("What is your favorite color?");

    while (count < 3) {

        count += 1;

        if (name.toLowerCase() === "finnick") {

            console.log(`To the dungeon with you ${name}!`);
            break;
        }

        console.log(`Hello, ${name}, good luck on your quest for the ${quest}. Here is a ${color} flower!`);

        name = await ask("What is your name?");

        quest = await ask("What is your quest?");

        color = await ask("What is your favorite color?");
    }
    console.log(`Hello, ${name}, good luck on your quest for the ${quest}. Here is a ${color} flower!`);

    console.log("Ran out of patience, no more questions!")

}

quest()