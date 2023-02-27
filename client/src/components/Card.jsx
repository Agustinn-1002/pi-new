import React from 'react'
import e from '../styles/Card.module.css'

const Card = (props) => {
  return (
    <div className={e.cardPoke}>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <p>{props.attack}</p>
      <p>tipo: 
        {
          props.types.length && props.types.map(e => 
              <li key={e}>{e}</li>
            )
        }
      </p>
    </div>
  )
}

export default Card