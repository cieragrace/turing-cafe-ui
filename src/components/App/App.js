import React, { Component } from 'react';
import './App.css';
import getAPIData from '../../APICalls';
import Reservations from '../Reservations/reservations'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    getAPIData()
    .then((data)=> this.setState({ reservations: data}))
    .catch((error)=> console.log(error))
  }

  componentDidUpdate = () => {
    console.log(this.state.reservations)
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'></div>
        <div className='resy-container'></div>
      </div>
    )
  }
}

export default App;
