import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App () {
  //useState for modal taking in state of openModal and with function of setOpenModal
  //initially you want modal closed, so the useState is set to false
  const [openModal, setOpenModal] = useState(false)
  return (
    // header with a message for user to click button to open modal
    <div className='App'>
      <h1>Click for a list of Vermont Counties</h1>
      {/* open button with onClick function that changes the state of setOpenModal to true so it opens */}
      <button
        className='openModalBtn'
        onClick={() => {
          setOpenModal(true)
        }}
      >
        Open
      </button>
      {/* conditionally renders the value of modal based on the openModal
      state--if open modal is true, open Modal component */}
      {openModal && <Modal openModal={setOpenModal} />}
    </div>
  )
}

export default App
