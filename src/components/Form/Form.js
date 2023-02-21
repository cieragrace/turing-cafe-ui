import './Form.css'
import App from '../App/App'
import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      name: "",
      date: "",
      time: "",
      number: null,
      id: Date.now()
    }
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleDateChange = (event) => {
    this.setState({date: event.target.value})
  }

  handleTimeChange = (event) => {
    this.setState({time: event.target.value})
  }

  handleNumberChange = (event) => {
    this.setState({number: event.target.value})
  }

  render() {
    return(
      <div className='form-container'>
        <input
          type='text'
          placeholder='Please Enter Your Name'
          // name='name'
          value={this.state.name}
          onChange={this.handleNameChange}>
        </input>
        <input
          type='date'
          placeholder='When would you like to come in?'
          // name=''
          value={this.state.date}
          onChange={this.handleDateChange}>
        </input>
        <input
          type='clock'
          placeholder='What time are you thinking?'
          // name=''
          value={this.state.time}
          onChange={this.handleTimeChange}>
        </input>
        <input
          type='number'
          placeholder='How many in your Party?'
          // name=''
          value={this.state.number}
          onChange={this.handleNumberChange}>
        </input>
        <button></button>
      </div>
    )
  }
}

export default Form