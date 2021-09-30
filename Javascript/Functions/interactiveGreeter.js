let aName = process.argv[2];

/*split string into array--to check for space so they don't type in full name (first and last)

let spaceCheck = aName.split('');

if (spaceCheck.indexOf(' ') > -1) {
    console.log("Please type your first name only!");
    process.exit()
}

else {*/

function greeter(aName) {

    let spaceChecker = aName.split(" ").forEach((word) => {
        if (word.indexOf(' ') <= -1 === true) { }
        console.log("Hey, only type your first name please!")
        process.exit();
    });


    let newName = aName.slice(0, 1).toUpperCase() + aName.slice(1).toLowerCase();


    let badName = ["Voldemort", "Sauron", "Humperdink", "Moriarty", "Vader"];

    let goodName = ["Terri", "Tina", "Bob", "Josh", "Cortney"];

    if (newName === badName[0] || newName === badName[1] || newName === badName[2] || newName === badName[3] || newName === badName[4]) {


        console.log(`Go away ${aName} my Enemy!`)

    } else if (newName === goodName[0] || goodName === goodName[1] || newName === goodName[2] || newName === goodName[3] || newName === goodName[4]) {

        //added uppercase to greeting
        console.log(`Hi ${aName.toUpperCase()} my friend!`)
    }

    else {

        console.log(`Hello ${aName.toUpperCase()}, my friend!`)

    }
}

console.log(greeter(aName));
