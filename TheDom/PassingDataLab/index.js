//js for simple form test

let text = document.getElementById('textBox')
let submitButton = document.getElementById('submitButton')
let form = document.getElementById('form')

//event listener to detect submit button click
form.addEventListener('submit', textDisplay)

let string = document.location.hash.substring(1)

form.addEventListener('submit', evt => {
  //gets user input into the form
  let userInput = stringInput.value
  console.log(userInput)
  //document.location sets this equal to the redirect page with a hash at the end (followed by the user input)
  // this redirects to a new URL with the hash after it
  document.location = '/greeting.html#' + userInput
  evt.preventDefault()
})
