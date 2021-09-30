const readline = require('readline');
const rli = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((res, rej) => {
        rli.question(questionText, res);
    });
}

async function mad() {

    let adj = await ask("please enter an adjective!");

    let noun = await ask("please enter a noun!");//

    let propNoun = await ask("please enter a proper noun!");

    let verb = await ask("please enter a verb!");

    let adverb = await ask("please enter an adverb!");

    let verbOne = await ask("please enter a verb!");

    console.log(`It was a(n) ${adj} day in the ${noun}. ${propNoun} was going to ${verb} a friend, And then ${adverb} ${verbOne} home.`);

}

mad();