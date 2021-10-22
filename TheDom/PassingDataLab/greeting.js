//JS for passing data lab

let stringInput = document.getElementById('textInput')
let submitButton = document.getElementById('submitButton')
let form = document.getElementById('form')

let string = document.location.hash.substring(1)

console.log(string)

form.addEventListener('submit', evt => {
  let userInput = stringInput.value
  console.log(userInput)
  document.location = '/greeting.html#' + userInput
  evt.preventDefault()
})
