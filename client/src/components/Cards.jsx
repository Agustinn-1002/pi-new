import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import e from '../styles/Cards.module.css'
import Paginado from './Paginado'
import Filters from './Filters'
import SearchBar from './SearchBar'
import Loader from './Loader'
import { Link } from 'react-router-dom'


const Cards = () => {
  let i = 1
  const dataPoke = useSelector(e => e.getDataPokemons)
  const [ orden , setOrden ] = useState('');

  const [load , setLoad]  = useState(true)

  const [ paginaActual , setPaginaActual ] = useState(1);
  const [ pokePorPagina , setPokePorPagina ] = useState(12);
  const indexUltimoPoke = paginaActual * pokePorPagina;
  const indexPrimerPersonaje = indexUltimoPoke - pokePorPagina;
  const pokePaginaAcutal = dataPoke.length && dataPoke.slice(indexPrimerPersonaje , indexUltimoPoke)
  
  const paginado = (pageNumber) => {
    setPaginaActual(pageNumber)
  }

  const ordenador = (valor) =>{
    setOrden(valor)
  }

  const falseLoader = () => {
    setLoad(false)
    setTimeout(() => {
      setLoad(true)
    }, 5000);
    
  }

  return (
    <>
        <Filters paginado={paginado} ordenador={ordenador}/>
        <SearchBar falseLoader={falseLoader}/>
        <Link to={'/create'}>Create Poke</Link>
          {load ? 
          <>
            <Paginado 
              pokePorPagina={pokePorPagina}
              dataPoke={dataPoke.length}
              paginado={paginado}
            />
            <div className={e.containerCardsFlex}>
              <div className={e.containerCards}>
                { dataPoke.length > 0 ? 
                  dataPoke.length && pokePaginaAcutal.map(p => 
                    <Card 
                      key = {p.id}
                      id = {p.id}
                      image = {p.image}
                      name = {p.name}
                      types = {p.types}
                      attack = {p.attack}
                      className = {`e.div${i++}`}
                    />
                  )
                  :
                  <h2>{dataPoke.msg}</h2>
                }
              </div>
            </div>
            <Paginado 
            pokePorPagina={pokePorPagina}
            dataPoke={dataPoke.length}
            paginado={paginado}
          /> 
          </>
            
          :
          <Loader></Loader>
          }
        
    </>
  )
}

export default Cards