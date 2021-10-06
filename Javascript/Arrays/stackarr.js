const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((res, rej) => {
        readlineInterface.question(questionText, res);
    });
}

let data = []

async function greeter() {

    let name = await ask("Who are you?");//awaiting promise
    data.push(name)

    while (name !== "bye") {//normally you want to .tolowercase and trim it for data sanitization

        name = await ask("...and who are you?")
        data.push(name)//adding name to array
    }
    while (data.length) {//makes it end when no more names left
        let person = data.pop()//accessing array by popping data out of it
        console.log("Hello " + person)

    }

    console.log(data)
    //shows that at end the array is empty
}

greeter()

/*this shows first in last out

Who are you?terri
...and who are you?bob
...and who are you?jack
...and who are you?jedda
...and who are you?bye
Hello bye
Hello jedda
Hello jack
Hello bob
Hello terri
[ [ 'apple', 'peach', 'tomato' ], [ 'carrot', 'parsnip' ] ]
*/




