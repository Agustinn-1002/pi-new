import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const Cards = () => {
  const dataPoke = useSelector(e => e.getAllDataPokemons)
  return (
    <div>
      <ul>
        {
          dataPoke.length && dataPoke.map(e => 
            <Card 
              image = {e.image}
              name = {e.name}
              hp ={e.hp}
              attack = {e.attack}
            />
          )
        }
      </ul>
    </div>
  )
}

export default Cards