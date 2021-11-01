//selectors for author and post ids
let authorList = document.getElementById('authors')
let postList = document.getElementById('posts')

//get author objects as JSON
fetch('http://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  //----grabbing authors----//
  //iterate over collection of author objects with .then taking the json object and for each author creating a link element and an li item
  .then(jsonObj => {
    jsonObj.forEach(author => {
      //create link element/list item
      let link = document.createElement('a')
      let listItem = document.createElement('li')

      //this part puts in the authors name as link content
      link.textContent = author.name
      link.href = '/author.html#' + author.id

      //putting link in the list
      listItem.appendChild(link)
      //put this as content for author's name
      authorList.appendChild(listItem)
    })
  })

//TYPE SIMILAR CONTENT FOR POSTS HERE
//----grabbing posts----//
fetch('http://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())

  //iterate over a collection of author objects (posts)
  .then(jsonColl => {
    jsonObj.forEach(post => {
      //create link element and list item as above
      let link = document.createElement('a')
      let listItem = document.createElement('li')

      //this adds in the title of the post as content
      link.textContent = post.title
      //creates a link to the post html page and adds the id of the post to it
      link.href = '/post.html#' + post.id

      //putting link in the list
      listItem.appendChild(link)
      //adding this as the content populating author's name
      postList.appendChild(listItem)
    })
  })
