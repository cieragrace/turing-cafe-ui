import './Card.css'
import React from 'react'

const Card = ({name, date, time, number}) => {
  return (
    <div className='reservation-container'>
      <h2 className='name'>{name}</h2>
      <p className='info'>{date}</p>
      <p className='info'>{time}</p>
      <p className='info'>{number}</p>
      <button className='cancel-btn'>Cancel</button>
    </div>
  )
}

export default Card