import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import e from '../styles/Cards.module.css'
import Paginado from './Paginado'
import Filters from './Filters'

const Cards = () => {

  const dataPoke = useSelector(e => e.getDataPokemons)

  const [ paginaActual , setPaginaActual ] = useState(1);
  const [ pokePorPagina , setPokePorPagina ] = useState(12);
  const indexUltimoPoke = paginaActual * pokePorPagina;
  const indexPrimerPersonaje = indexUltimoPoke - pokePorPagina;
  const pokePaginaAcutal = dataPoke.length && dataPoke.slice(indexPrimerPersonaje , indexUltimoPoke)
  
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
        <Filters paginado={paginado}/>
        { dataPoke.length > 0 ? 
          dataPoke.length && pokePaginaAcutal.map(e => 
            <Card 
              key = {e.id}
              image = {e.image}
              name = {e.name}
              types = {e.types}
            />
          )
          :
          <h2>{dataPoke.msg}</h2>
        }
        <Paginado 
            pokePorPagina={pokePorPagina}
            dataPoke={dataPoke.length}
            paginado={paginado}
          />  
    </div>
  )
}

export default Cards