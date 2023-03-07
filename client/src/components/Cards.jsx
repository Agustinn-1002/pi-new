import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import e from '../styles/Cards.module.css'
import Paginado from './Paginado'
import Filters from './Filters'
import SearchBar from './SearchBar'
import Loader from './Loader'
import FormCreatePoke from './FormCreatePoke'
import { Link } from 'react-router-dom'


const Cards = () => {
  const dataPoke = useSelector(e => e.getDataPokemons)
  const [ orden , setOrden ] = useState('');

  const [load , setLoad]  = useState(true)
  const [createActive , setCreateActive]  = useState(true)
  const objInput = {  
  name:"", 
  hp:0, 
  defense:0, 
  attack:0, 
  speed:0, 
  height:0, 
  weight:0,
  types:[], 
  image:""
}
  const [input, setInput] = useState({
    name:"", 
    hp:0, 
    defense:0, 
    attack:0, 
    speed:0, 
    height:0, 
    weight:0,
    types:[], 
    image:""
  })

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
        <div className={createActive?e.noActive:e.active}>
          <a href='Home#' className={e.volver} onClick={()=>{
                setCreateActive(!createActive);
                setInput(objInput)
              }}>
                
            <lord-icon 
              src="https://cdn.lordicon.com/zmkotitn.json" 
              trigger="loop-on-hover" delay={10} 
              colors="primary:#121331" 
              state="hover-3" 
              style={{width: '30px', height: '60px'}}
              >  
            </lord-icon>
          </a>
          <FormCreatePoke createActive={createActive} setCreateActive={setCreateActive} input={input} setInput={setInput} objInput={objInput}/>  
        </div>
    
        <Filters createActive={createActive} paginado={paginado} ordenador={ordenador}/>

        <div className={!createActive ? `${e.navegacion} ${e.blur}` : e.navegacion}>
          <a href='#create' onClick={()=>setCreateActive(!createActive)}>CREAR POKEMON</a>
          <SearchBar falseLoader={falseLoader}/>
        </div>

        
          {load ? 
          <>
            <div className={!createActive ? e.blur : ''}>
              <Paginado 
                pokePorPagina={pokePorPagina}
                dataPoke={dataPoke.length}
                paginado={paginado}
              />
            </div>
            <div className={!createActive ? `${e.blur} ${e.containerCardsFlex}` : `${e.containerCardsFlex}`}>
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
                      defense = {p.defense}
                    />
                  )
                  :
                  <h2>{dataPoke.msg}</h2>
                }
              </div>
            </div>
            <div className={!createActive ? e.blur : ''}>
              <Paginado 
              pokePorPagina={pokePorPagina}
              dataPoke={dataPoke.length}
              paginado={paginado}
              /> 
            </div>
          </>
            
          :
          <Loader></Loader>
          }
        
    </>
  )
}

export default Cards