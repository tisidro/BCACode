//This replaces the class code on App.js...all you have to do is import func.js in index.js where all the imports of js files are going on. Index.js is kind of just doing that

import { useState } from 'react'

//bring  prop into functional comp
function App (props) {
  //var1 tracks property & state, var2 sets it. useState is the hook
  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    fullName: '',
  })
  const [input, setInput] = useState({fullName: this.state.firstName + ' ' + this.state.lastName})

  function handleInput (evt) {
    //set input to what event's value was (pass in new value to setValue)
    setInput(evt.target.value)
  }


return (
  <div>
    {/* reference value directly here */}
    <h2>{value}</h2>
    <form
      onSubmit={evt => {
        evt.preventDefault()
        setValue(input)
      }}
    >
      <input type='text' onChange={handleInput} value={input} />
      <input type='submit' />
    </form>
  </div>
  )
}

export default function