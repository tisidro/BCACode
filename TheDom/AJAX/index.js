let title = document.getElementById('title')
let content = document.getElementById('post-content')
let selectionForm = document.querySelector('form')
let idField = document.querySelector('[type="number"]')

selectionForm.addEventListener('submit', evt => {
  evt.preventDefault()
  let id = idField.value

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(result => {
      if (result.ok) {
        return result.json()
      } else {
        console.log({ result })
      }
      return result.json()
    })

    .then(jsonObj => {
      console.log(jsonObj)
      title.textContent = jsonObj.title
      content.textContent = jsonObj.body
    })
    .catch(err => {
      title.textContent = 'We have an error: check console for details'
    })
})
