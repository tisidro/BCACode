//object using method I write,speak...an anonymous function
//this always points to the function in which it is called (the object we are calling it on). The keyword this is bound to the context in which it is called.

let bowie = {

    name: "Bowie",
    paws: 4,
    speak: function (num) {

        let count = 0
        while (count < num) {

            console.log("Bark")
            count++
            //value of speak is the whole definition
        }
    },
    talk: function () {
        console.log(`I am ${bowie.name} and I have ${bowie.paws} paws`)
    },
    owner:
    {
        name: "Andy",
        action: function () {
            console.log(this.name + " fell in the pit");//here, this points to the owner object
        }
    }
}

function whatsThis() {
    console.log(this)
    //if you have this while in global scope it references the global object
}

whatsThis()
//however, if you attached this function to an object like Bowie, then the this keyword in whatsThis will refer to Bowie object
bowie.what = whatsThis
bowie.what()

console.log(bowie.what())//will console.log bowie object (because whatsThis console.logs this keyword)

console.log(bowie.speak(8))
console.log(bowie.talk())
console.log(bowie.owner.action())
