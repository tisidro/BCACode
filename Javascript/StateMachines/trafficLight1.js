
let light = "green";//the current state you are tracking-- for async input let user input =light

//The first step when creating a state machine is to set up an object that will hold your allowable transitions. You will need a key to represent each possible state, and a value that's an array of possible transitions.

//lookup table of state values and allowable transitions:

let transitions = {//states the light can be in:how they can transform
    green: ["yellow"],
    yellow: ["red",, "blinking yellow"],
    "blinking yellow": ["yellow"],//blinking yellow is in quotes b/c of space
    red: ["green", "blinking red"],
    "blinking red": ["red"]
}

//To enforce our state machine we create a function that knows what the current state is, and accepts the next state as an argument.
//If the change from the current state to the next state is valid we change our current state, otherwise we throw an error and the state doesn't change.


//function that will change light color 9stat of light
function changeLight(newColor) {
    //checks what current state of light is and if new color is a valid transition
    if(transitions[light].includes(newColor)){
        light = newColor} 
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
