//object with functions and demonstrating use of keyword this within an object to access values of keys in the object

let bowie = {

    name: "Bowie",
    paws: 4,
    speak: function (num) {//num is the number of times you want him to bark

        let count = 0
        while (count < num) {

            console.log("Bark")
            count++
            //incrementor
        }
    },
    talk: function () {
        console.log(`I am ${this.name} and I have ${this.paws} paws`)
    }
}
let champion = {

    name: "Champ",
    paws: 5,
    speak: function (num) {

        let count = 0
        while (count < num) {

            console.log("Whoa")
            count++
            //value of speak is the whole definition
        }
    },
    talk: function () {
        console.log(`I am ${this.name} and I have ${this.paws} paws`)
    }
}

bowie.talk()//I am Bowie and I have 4 paws!

champion.talk()//I am Champ and I have 4 paws

bowie.speak(2)//Bark Bark!

champion.speak(3)//Whoa Whoa Whoa