import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = { firstName: '', lastName: '', fullName: '' }
  }

  //this targets type of event what is changing value gets what its changing to

  firstName = evt => {
    this.setState({ firstName: evt.target.value })
    console.log(this.state.firstName)
  }

  lastName = evt => {
    this.setState({ lastName: evt.target.value })
  }

  fullName = evt => {
    //default action when you click button is to refresh page.This prevents it so you don't lose info
    evt.preventDefault()
    this.setState({
      fullName: this.state.firstName + ' ' + this.state.lastName
    })
  }

  render () {
    return (
      <form onSubmit={this.fullName}>
        <input type='text' onChange={this.firstName}></input>
        <input type='text' onChange={this.lastName}></input>
        <button type='submit'>submit</button>
        {/* display area */}
        <h1>{this.state.fullName}</h1>
      </form>
    )
  }
}

export default App
