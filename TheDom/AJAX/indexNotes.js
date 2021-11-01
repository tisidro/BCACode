//basic fetch request loading data on page load

let title = document.getElementById('title')
let content = document.getElementById('post-content')

//fetch is asynchronous, deals w/ promises--promise chaining/common w/ fetch request
// getting data from site, need url...goes in fetch() results will come from this site which gives a bunch of posts

fetch('https://jsonplaceholder.typicode.com/posts/1')
  //callback function takes result of preceding promise--the fetch request. but promise is not fully resolved w/ result...need to make it a usable format
  //first then is http headers (see notes about 1st and 2nd then)
  .then(result => {
    return result.json() //turns result back into json object--also needs to return json() object and need another promise
  })

  //this will change for needs of your app...the above is boilerplate
  .then(jsonObj => {
    console.log(jsonObj) //body and title are in this jsonObj! you can see it in this console.log
    title.textContent = jsonObj.title
    content.textContent = jsonObj.body
  })
