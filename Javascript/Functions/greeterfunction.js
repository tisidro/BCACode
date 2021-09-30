

function greeter(aName) {


    let spaceChecker = aName.split(" ").forEach((word) => {
        if (word.indexOf(' ') <= -1 === true) { }
        console.log(`Hey, only type your first name please!`)
        process.exit();
    });

    let newName = aName.slice(0, 1).toUpperCase() + aName.slice(1).toLowerCase();


    let badName = ["Voldemort", "Sauron", "Humperdink", "Moriarty", "Vader"]

    let goodName = ["Terri", "Tina", "Bob", "Josh", "Cortney"]

    if (newName === badName[0] || newName === badName[1] || newName === badName[2] || newName === badName[3] || newName === badName[4]) {

        //added uppercase to greeting
        console.log(`Go away ${aName.toUpperCase()} my Enemy!`)

    }
    else if (newName === goodName[0] || goodName === goodName[1] || newName === goodName[2] || newName === goodName[3] || newName === goodName[4]) {

        //added uppercase to greeting
        console.log(`Hi ${aName.toUpperCase()} my friend!`)

    } else {

        console.log(`Hello ${aName.toUpperCase()}, want to be my friend?`)

    }

}



console.log(greeter("Terri"));
console.log(greeter("SauRon"));
console.log(greeter("Vader"));
console.log(greeter("MORIARTY"));
console.log(greeter("Finny"));
console.log(greeter("cortney"));
console.log(greeter("Mr. Finn"))