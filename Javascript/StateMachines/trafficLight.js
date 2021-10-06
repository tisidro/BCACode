//The first step when creating a state machine is to set up an object that will hold your allowable transitions. You will need a key to represent each possible state, and a value that's an array of possible transitions.

let states = {
    green: ["yellow"],
    yellow: ["red"],
    red: ["green", "flashing red"],
    'flashing red': ["red"]
}

//To enforce our state machine we create a function that knows what the current state is, and accepts the next state as an argument.
//If the change from the current state to the next state is valid we change our current state, otherwise we throw an error and the state doesn't change.

let currentState = "green";

function enterState(newState) {
    let validTransitions = states[currentState];
    if (validTransitions.includes(newState)) {
        currentState = newState;
    } else {
        throw ("Invalid state transition attempted - from " + currentState + " to " + newState;)
    }
}

