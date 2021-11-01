import { useState, useEffect } from 'react'

function List (props) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (posts.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => {
          setPosts(res)
        })
        .catch(err => {
          alert('Something went wrong...')
          console.error(err.message)
        })
    }
  })

  function handleEvent (evt) {
    props.setId(evt.target.id)
    console.log(evt.target.id)
  }

  return (
    <ul>
      {posts
        ? posts.map(post => {
            return (
              <li id={post.id} onClick={handleEvent}>
                {post.title}
              </li>
            )
          })
        : 'Please wait page is loading...'}
    </ul>
  )
}

export default List
