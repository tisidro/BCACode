import React, { useState } from 'react'
//can only use hooks in function components!
//hooks will execute in order they are written
//hooks can't go into if statements or nested in anything...only in top level of function
//const [currentstate, stateUpdate] = useState(4)-->pass it default value
//here count is current state and set count will be updated

function App () {
  const [count, setCount] = useState(() => {
    return 4
  })

  function decrementCount () {
    setCount(prevCount => prevCount - 1) //when you decrement by one be sure to tie it to previous count!
  }

  function incrementCount () {
    setCount(prevCount => prevCount + 1) //when you  increment by one be sure to tie it to previous count!
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>
        <h1>{count}</h1>
      </span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default App
