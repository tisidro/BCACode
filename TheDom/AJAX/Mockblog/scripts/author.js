let authorId = document.location.hash.slice(1) //removing hash
let postCont = document.getElementById('posts')

fetch('http://jsonplaceholder.typicode.com/users' + authorId)
  .then(res => res.json())
  //getting author by name
  .then(authorObj => {
    document.getElementById('name').textContent = authorObj.name
  })

//get posts by specific author

fetch('http://jsonplaceholder.typicode.com/posts' + authorId)
  .then(res => res.json())

  .then(posts => {
    //console.log(posts)to check your array you are getting
    posts.forEach(post => {
      //same code as on index.js foreach but everywhere you see author it changes to post-- also NOT post.name, make it post.title
    })
  })
