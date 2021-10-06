//a program that accepts a poet's name, and prints the title of a poem by that poet

let poetLookup = {
    "Robert Frost": "Stopping by Woods on a Snowy Evening",
    "Shel Silverstein": "Falling Up",
    "Sylvia Plath": "The Bell Jar"
};

function printTitle(userInput) {
    console.log(poetLookup[userInput])
};