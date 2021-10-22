//--------------dom query-------------//
//target element and assign it to a variable
let form = document.getElementById('input-form')
let inputSubmit = document.getElementById('submit-button')
let textField = document.getElementById('text-field')
let display = document.getElementById('display')
//--------------event listener-------------//

//event listener for button
inputSubmit.addEventListener('click', function (evt) {
  let entry = textField.value //value of the text field
  console.log(entry)
  if (
    entry === 'Voldemort' ||
    entry === 'Sauron' ||
    entry === 'Humperdinck' ||
    entry === 'Moriarty' ||
    entry === 'Vader'
  ) {
    display.textContent = 'Go, away enemy!'
  } else if (entry === 'Bye!' || entry === 'Bye') {
    display.textContent = 'Goodbye!'
  } else {
    display.textContent = 'Hello, ' + entry + 'my friend!'
  }

  evt.preventDefault() //standard code so page won't refresh auto
})
