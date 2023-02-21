import React, { Component } from 'react';
import '../App/App.css'
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
    getAPIData('reservations')
    .then((data)=> this.setState({ reservations: data.reservations}))
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
        <Reservations reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
