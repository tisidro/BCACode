let authorDisp = docuement.getElementbyId('author')
let titleDisp = docuement.getElementbyId('title')
//post body
let content = docuement.getElementbyId('content')
let postId = document.location.hash.slice(1)

fetch('http://jsonplaceholder.typicode.com/posts' + postId)
  .then(res => res.json())
  .then(postObj => {
    titleDisp.textContent = postObj.title
    content.textContent = postObj.body
    //secondfetch for author's name

    fetch('http://jsonplaceholder.typicode.com/posts' + postObj.user)
    .then(postObj => {
        titleDisp.textContent = postObj.title
        content.textContent = postObj.body
        
    
  })
