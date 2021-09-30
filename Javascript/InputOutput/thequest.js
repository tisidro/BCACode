const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((res, rej) => {
        readlineInterface.question(questionText, res);
    });
}

async function quest() {

    let name = await ask("What is your name?");

    let quest = await ask("What is your quest?");

    let color = await ask("What is your favorite color?");

    if (name.toLowerCase() === "finnick") {

        console.log(`To the dungeon with you ${name}!`)
        process.exit()
    }

    console.log(`Hello, ${name}, good luck on your quest for the ${quest}. Here is a ${color} flower!`);

    process.exit();

}

quest()