
function greeter(aName) {

    let splitName = aName.split(" ");//splits entry into an array
    fNameOnly = splitName[0];//takes just first item, first name, in the array

    let newName = fNameOnly.slice(0, 1).toUpperCase() + fNameOnly.slice(1).toLowerCase();


    let badName = ["Voldemort", "Sauron", "Humperdink", "Moriarty", "Darth"];

    let goodName = ["Terri", "Tina", "Bob", "Josh", "Cortney"];

    if (newName === badName[0] || newName === badName[1] || newName === badName[2] || newName === badName[3] || newName === badName[4]) {


        console.log(`Go away ${aName} my Enemy!`);
        process.exit();

    } else if (newName === goodName[0] || goodName === goodName[1] || newName === goodName[2] || newName === goodName[3] || newName === goodName[4]) {

        //added uppercase to greeting
        console.log(`Hi ${aName} my friend!`);

        process.exit();
    }

    else {

        console.log(`Hello ${aName}, my friend!`)

        process.exit();

    }

};
console.log("What is  your name?");

process.stdin.once('data', (data) => {

    let cleanUpData = data.toString().trim();

    greeter(cleanUpData);//need to translate the data to a string
    process.exit();

});

