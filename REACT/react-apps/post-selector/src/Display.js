import { useState, useEffect } from 'react'

// all components take props as input
function Display (props) {
  const [body, setBody] = useState('') //could be null here too

  useEffect(() => {
    //takes just the one post and its post id--pass it in as a prop
    fetch('https://jsonplaceholder.typicode.com/posts/' + props.id)
      .then(res => res.json())
      //set it in state
      .then(res => {
        setBody(res.body)
      })
  })
  //returning div and in there setting up
  return (
    <div>
      {/* can display title here */}
      <p> {body}</p>
    </div>
  )
}

export default Display
