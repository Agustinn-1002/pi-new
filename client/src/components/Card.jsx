import React from 'react'
import e from '../styles/Card.module.css'

const Card = (props) => {
  return (
    <div className={e.cardPoke}>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <p>Vida: {props.hp}</p>
      <p>ataque: {props.attack}</p>
    </div>
  )
}

export default Card