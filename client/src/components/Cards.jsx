import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import e from '../styles/Cards.module.css'
import Paginado from './Paginado'

const Cards = () => {

  const dataPoke = useSelector(e => e.getAllDataPokemons)

  const [ paginaActual , setPaginaActual ] = useState(1);
  const [ pokePorPagina , setPokePorPagina ] = useState(12);
  const indexUltimoPoke = paginaActual * pokePorPagina;
  const indexPrimerPersonaje = indexUltimoPoke - pokePorPagina;
  const pokePaginaAcutal = dataPoke.slice(indexPrimerPersonaje , indexUltimoPoke)

  const paginado = (pageNumber) => {
    setPaginaActual(pageNumber)
  }

  return (
    <div className={e.containerCards}>
        <Paginado 
            pokePorPagina={pokePorPagina}
            dataPoke={dataPoke.length}
            paginado={paginado}
          />
        {
          dataPoke.length && pokePaginaAcutal.map(e => 
            <Card 
              image = {e.image}
              name = {e.name}
              hp ={e.hp}
              attack = {e.attack}
            />
          )
        }  
    </div>
  )
}

export default Cards