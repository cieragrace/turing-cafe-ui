import './Reservations.css'
import React from 'react'
import Card from '../Card/Card'

const Reservations = (props) => {
  const reservationCards = props.reservations.map(reservation => {
    return(
      <Card 
      name={props.name}
      date={props.date}
      time={props.time}
      number={props.number}
      />
    )
  })
  return (
    <div className='dashboard-container'>
      {reservationCards}
    </div>
  )
}

export default Reservations