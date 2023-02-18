import React from 'react'

const Card = (props) => {
  return (
    <>
      <img src={props.image} alt="" />
      <li>{props.name}</li>
      <li>{props.hp}</li>
      <li>{props.attack}</li>
    </>
  )
}

export default Card