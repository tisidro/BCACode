const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((res, rej) => {
        readlineInterface.question(questionText, res);
    });
}

let results = [
    {
        title: "A Wizard of Earthsea",
        tags: ['fantasy', 'ursula k. le guin']
    },
    {
        title: "Thing Explainer",
        tags: ["science", "technology", "humor", "randal munro"]
    },
    {
        title: "The Fellowship of the Ring",
        tags: ["fantasy", "jrr tolkien"]
    },
    {
        title: "A Brief History of Time",
        tags: ["history", "science", "stephen hawking"]
    },
    {
        title: "The Great Fairy Tale Tradition",
        tags: ["fairy tale", "history", "jack zipes"]
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        tags: ["science fiction", "humor", "douglas adams"]
    },
    {
        title: "The Silmarillion",
        tags: ["fantasy", "mythology", "jrr tolkien"]
    },
    {
        title: "Eloquent JavaScript",
        tags: ["programming", "technology", "marijn haverbeke"]
    }
];
titleSearch();
async function titleSearch() {

    let searchWord = await ask("What kind of book are you searching for (fantasy, science, humor, history, etc)?");

    //to allow for multiple tag entries maybe take input and turn it into an array then ???

    //I would like to add something here that pulls from the zero index of tag array so I can write an if statement that console.logs "please try again" if they type something that is NOT in any tag[0]

    let matchedBooks = results.filter((bookInResults) => { //run filter on results taking in bookInResults (represents each book in Results object). Filter takes in a callback function with a parameter

        let bookTags = bookInResults.tags;
        //declare a variable for your book selection--your input for filter function and what part of object it will look at(the tags key)

        if (bookTags.includes(searchWord)) {//conditional that returns the book if its tags include the searchWord user entered asynchronously.
            return true;
        } else {
            console.log(`sorry, we don't have a book with ${searchWord}, please try entering another genre like history, science fiction, or humor.`)//need to put in another if statement so it either console.logs matched books or gives this error message
        }

    })

    console.log(matchedBooks);//logs the filtered matched books results

    let tryAgain = await ask("Would you like to search again?");

    let lCaseTryAgain = tryAgain.toLowerCase();



    if (lCaseTryAgain === "y" || lCaseTryAgain === "yes") {
        titleSearch();
    } else if (lCaseTryAgain === "n" || lCaseTryAgain === "no") {
        console.log("okay, bye!")
        process.exit();
    }
}