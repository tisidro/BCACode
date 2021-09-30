const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((res, rej) => {
        readlineInterface.question(questionText, res);
    });
}

async function testingAsk() {

    let response = await ask("is this working?");//awaiting promise


    console.log(response);

}

testingAsk()