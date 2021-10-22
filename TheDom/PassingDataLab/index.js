//js for simple form test

let form = document.getElementById('form')
let textbox = document.getElementById('textinput')
let display = document.getElementById('display')

//event listener to detect submit button click
form.addEventListener('submit', textDisplay)

//update text on page when you click the submit button
function textDisplay (evt) {
  evt.preventDefault() //If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.
  userName = document.getElementById('textbox')
  display.innerText = userName.value
}
