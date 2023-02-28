import React from 'react'
import e from '../styles/Card.module.css'
import {Link} from 'react-router-dom'

const Card = (props) => {
  return (
    <div className={e.cardPoke}>
      <Link to={`/home/${props.id}`}>
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
      </Link>
    </div>
  )
}

export default Card