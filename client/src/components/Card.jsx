import React from 'react'
import e from '../styles/Card.module.css'
import {Link} from 'react-router-dom'

const Card = (props) => {
  return (
    <div className={e.cardPoke}>
      <Link className={e.contain} to={`/Home/${props.id}`}>
        <img src={props.image} alt="" />
        <div className={e.card}>
          <p className={e.titulo}>{props.name}</p>
          <div className={e.caracteristicas}>

            <div className={e.stast}>
              <p>ataque: {props.attack}</p>
              <p>defensa: {props.defense}</p>
            </div>

            <div className={e.types}>
              <p>tipo:</p>
                {
                  props.types.length && props.types.map(e => 
                        <span key={e}>&#8211; {e}</span>             
                    )
                }
              
            </div>

          </div>
        </div>
        
        
      </Link>
    </div>
  )
}

export default Card