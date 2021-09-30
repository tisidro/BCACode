function greeter(inName) {
    let splitName = inName.toString().trim().split(" ");//splits entry into an array
    fNameOnly = splitName[0];//takes just first item, first name, in the array

    let newName = fNameOnly.slice(0, 1).toUpperCase() + fNameOnly.slice(1).toLowerCase();


    if (newName === "Voldemort" || newName === "Sauron" || newName === "Humperdinck" || newName === "Moriarty" || newName === "Vader") {
        console.log("Go, away!")
        process.exit()

    } else if (newName === "Bye!" || newName === "Bye") {
        console.log("Goodbye!")
        process.exit();

    } else {
        console.log("Hello, " + inName + "!")
    }
}

console.log("What is  your name?");

process.stdin.on('data', (data) => {

    let cleanUpData = data.toString().trim();

    greeter(cleanUpData);//need to translate the data to a string*/

    console.log("What is  your name?");//repeats question until bye or enemy entered

});