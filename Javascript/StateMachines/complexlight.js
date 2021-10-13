
class Light{

constructor(color, shape){
    this.color = color
    this.shape = shape
}
}

let green = new Light('green',"circle")
let red = new Light('red',"circle")
let yellow = new Light('yellow',"circle")
let blinkingRed = new Light('blinking red', circle)
let blinkingYellow = new Light('blinking yellow', circle)

let light = "green";//the current state you are tracking

let lightLookup = {///use this to map string to actual object

"green": green,
"yellow": yellow,
"red": red,
"blinking red": blinkingRed,
"blinking yellow": blinkingYellow,

}


let transitions = {//states the light can be in:how they can transform
    green: ["yellow"],
    yellow: ["red",, "blinking yellow"],
    "blinking yellow": ["yellow"],//blinking yellow is in quotes b/c of space
    red: ["green", "blinking red"],
    "blinking red": ["red"]
}


function changeLight(newColor) {
    //checks what current state of light is and if new color is a valid transition
    if(transitions[light.color].includes(newColor)){
        light = lightLookup[newColor]} 
        else {
            //if color is not a valid transition...give a no-can-do message
            //throw(`**sorry the traffic light can't go from ${light} to ${newColor}**`) better for programmer
            console.log((`**sorry the traffic light can't go from ${light} to ${newColor}**`))
            
        }
}
console.log(light)
changeLight('yellow')
console.log(light)
changeLight('red')
console.log(light)
changeLight('blinking red')
console.log(light)
changeLight('green')
console.log(light)
changeLight('red')
console.log(light)
changeLight('green')
console.log(light)

/*
green
yellow
red
blinking red
sorry the traffic light can't go from blinking red to green
blinking red
red
green*/
