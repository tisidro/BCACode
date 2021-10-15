const readline = require('readline')
const rlInterface = readline.createInterface(process.stdin, process.stdout)

function ask (questionText) {
  return new Promise((resolve, reject) => {
    rlInterface.question(questionText, resolve)
  })
}

//-------------initialize global variables-----------//

let inventory = [] //need this  to hold items so we can check if we have an item in our inventory

//create item class
class Item {
  constructor (name, description, action, takeable) {
    this.name = name
    this.description = description
    this.action = action || 'nothing' //if item has no action property nothing happens
    this.takeable = takeable || false //if item has no action property nothing happens
  }

  //take method on the class item
  take () {
    //if item is takeable, push item to inventory array which was initialized up above

    if (this.takeable) {
      inventory.push(this.name)
      return `you picked up ${this.name}`
    } else {
      return `hey, you can't take that!`
    }
  }
  //use method on the class item
  use () {
    if (this.name === 'desk' && inventory.includes('smallkey')) {
      return `you can open the drawer! inside is a large key`
    } else {
      return this.action //if there is an action it will return the action otherwise it will return the action
    }
  }
}

//----------------make items from the class ---------------//
//it pass in all item properties from class to the child item--name, description, action into each item variable

let desk = new Item(
  'desk',
  'a small writing desk. /n There is a drawer',
  'the desk is locked',
  undefined //not takeable so it will come back as undefined
)

let rug = new Item(
  'rug',
  'a rug',
  'you lift the rug, and see a small key',
  undefined //not takeable so it will come back as undefined
)

let clock = new Item(
  'clock',
  'the clock keeps ticking, /n There no way to open it',
  'the clock is not very helpful as the time is wrong',
  undefined //not takeable so it will come back as undefined
)

let smallkey = new Item(
  'smallkey',
  'a small key',
  'this looks like it would fit lock on the desk drawer',
  true //takeable
)

let largekey = new Item(
  'largekey',
  'a large key',
  'fits lock on the door',
  true
)

//-----------------create lookup table for items-----------//

let lookupTable = {
  desk: desk,
  rug: rug,
  clock: clock,
  smallkey: smallkey,
  'small key': smallkey,
  largekey: largekey,
  'large key': largekey
}

//----------game play/start------------//
async function play () {
  let userAction = await ask('what would you like to do?')

  let inputArray = userAction.toLowerCase().split(' ') //takes user action, lowercase it and split it on any spaces

  let action = inputArray[0] //to determine the action. It takes input array @ index zero to give you the action (ie - "use")

  let target = inputArray.slice(1).join(' ') //target is what we are going look up in the lookup table. then it joins them back in case it's small key---this may be redundant

  if (action === 'use') {
    console.log(lookupTable[target].use()) //this goes to the lookupTable's use() method. log out whatever is the target of the lookup table and run the use method on it.
  } else if (action === 'take') {
    //instanceof is for if item exists--looks at boolean of takeable item
    if (lookupTable[target] instanceof Item) {
      //if takeable it will return the take property
      console.log(lookupTable[target].take())
    } else {
      console.log(lookupTable[target] instanceof Item)
      console.log("That's not an item") //can't take it message
    }
  } else if (action === 'examine') {
    console.log(lookupTable[target].desc)
  } else if (action === 'leave' || action === 'exit') {
    if (inventory.includes('largekey')) {
      console.log('you open the door and are free!')

      process.exit()
    } else if (inventory.includes('smallkey')) {
      console.log('This small key does not fit int he door...')
    } else {
      console.log('The door is locked')
    }
  } else {
    //catch all for every other action player tries to do!
    console.log("I can't do that...invalid input, please try again!")
  }
  return play() //this is what makes it go back to the top of the async function so it can start getting the user input again since this input wasn't right
}

console.log(
  'Welcome brave traveler to your DOOOOOOM!\nYou find yourself trapped in a small room.\nTo your left is a small desk and in the middle of the floor is a faded rug.\nTo your right is a grandfather clock and directly across from you is the door to go out.'
)
play() //sees this right away
