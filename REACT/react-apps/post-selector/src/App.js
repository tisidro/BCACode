import logo from './logo.svg'
import './App.css'
import Display from './Display'
import List from './List'
import { useState } from 'react'

function App () {
  const [postId, setPostId] = useState('') //could be null here instead and also would work

  return (
    <div>
      <Display id={postId} />
      <List id={postId} setId={setPostId} />
      <List />
    </div>
  )
}

export default App
