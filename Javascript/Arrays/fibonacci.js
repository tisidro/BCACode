const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((res, rej) => {
        readlineInterface.question(questionText, res);
    });
}
userAsk()

async function userAsk() {

    let response = await ask("enter how many fibonacci numbers to calculate?");//awaiting promise
    let series = [0, 1]; //starting array
    function fibo() {

        while (series.length < parseInt(response)) {

            let lastNum = series.pop();//takes off last item of stack

            let secondToLast = series.pop();//takes off first item of stack

            let nextNum = lastNum + secondToLast;

            series.push(secondToLast, lastNum, nextNum);//to get items back in same order, need to put num2 first because it's the first item in the array then put in num1 because it's actually the second item in the array

        };

        console.log(series.toString(","))
        console.log(series)
    }

    console.log(fibo());

    let tryAgain = await ask("Would you like to try again?");//awaiting promise

    let lCaseTryAgain = tryAgain.toLowerCase();



    if (lCaseTryAgain === "y" || lCaseTryAgain === "yes") {
        userAsk();
    } else if (lCaseTryAgain === "n" || lCaseTryAgain === "no") {
        console.log("okay, bye!")
        process.exit();

    }


}



