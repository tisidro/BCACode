//here's a loop that echoes what the user types into terminal and only stops when the user types "stop copying me!"

const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
    });
}

async function copyCat() {
    let answer = 'Hello! How are you doing?'//>- if you just want to present a typeable field

    //while the answer is NOT "stop copying me!"... 

    while (answer.toLowerCase() !== "stop" && answer.toLowerCase() !== "stop copying me!" && answer.toLowerCase() !== "stop copying me") {


        //with a negative comparison use &&. if reply is not "stop" and not "stop copying me!"" and "not stop copying me"...it will evaluate

        //wait for the answer (ask function) repeat answer and return

        answer = await ask(answer + " >_")
        //wait for the user answer (promises allow this)

    }
    process.exit()
}
copyCat()