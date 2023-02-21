import './Reservations.css'
import React from 'react'
import Card from '../Card/Card'

const Reservations = ({reservations}) => {
  const reservationCards = reservations.map(reservation => {
    return(
      <Card 
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
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