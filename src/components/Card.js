import React from 'react'
import '../styles/Card.css'


const Card = ({emoji, heading, detail}) => {
  return (
    <div className="card">
        <img src={emoji} className='card_img' alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className='c-button'>LEARN MORE</button>
    </div>
  )
}

export default Card
