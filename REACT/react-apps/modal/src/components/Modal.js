import React from 'react'

function Modal (props) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'></div>
      {/* container holding the title, body, and footer of the modal you get when you click */}
      <div className='title'></div>
      <h1>What County Are We In?</h1>
      <div className='body'></div>
      <p>
        Addison County, VT
        <br /> Bennington County, VT <br /> Caledonia County, VT
        <br />
        Chittenden County, VT
        <br />
        Essex County, VT <br /> Franklin County, VT <br /> Grand Isle County, VT{' '}
        <br /> Lamoille County, VT <br /> Orange County, VT <br /> Orleans
        County, VT <br /> Rutland County, VT
        <br />
        Washington County, <br /> Windham County, VT <br /> Windsor County, VT{' '}
      </p>
      <div className='footer'>
        <button>Guess</button>
        <button>Cancel</button>
      </div>
    </div>
  )
}

export default Modal
