import './Form.css'
import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      date: "",
      time: "",
      number: null,
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

  clearInputs = () => {
    this.setState({ name: "", date: "", time: "", number: null})
  }

  submitReservationRequest = (event) => {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation)
    this.clearInputs()
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
          type='time'
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
        <button
        onClick={event => this.submitReservationRequest(event)}>
          Make Reservation
        </button>
      </div>
    )
  }
}

export default Form