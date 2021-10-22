/*
let listItems = document.getElementsByTagName('listItems')

let listItems = document.getElementsByClassName('end')

let listItems = document.getElementsById('penultimate')
//if element does not exist, you will get null//

let listItems = document.querySelector([(id = 'penultimate')])

//tag names are also acceptable for querySelector//
let listItems = document.querySelector('li') //gives you just first one

let listItems = document.querySelectorAll('li') //gives you all li's

console.log(listItems)
//if no item of that name you would get an empty collection--will always return a collection//
*/

let list = document.querySelector('ul')
let add = document.getElementbyId('add-content')

//add event listener (takes the event as an argument)

add.addEventListener('click', () => {
  //attach new list item to list
  let content = 
  
  list.innerHTML += '<li>Item</li>')
})
