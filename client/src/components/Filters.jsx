import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByOrder, filterByTypes, setCurrentPage } from '../redux/actions'
import e from '../styles/Filters.module.css'

const Filters = (props) => {
    const types = useSelector(e => e.types)
    const typesActual = useSelector(e => e.typesActual)
    const dispatch = useDispatch()
    
    const handleFilterByTypes= e => {
        dispatch(filterByTypes(e))
        dispatch(setCurrentPage(1))
        props.paginado(1)
    }
    const handleFilterByOrder = e => {
        dispatch(filterByOrder(e))
        dispatch(setCurrentPage(1))
        props.paginado(1)
    }
  return (
    <div>
        <select>
            <option value="All">Todos los pokemones</option>
            <option value="getApi">pokemones existentes</option>
            <option value="getDB">pokemones creados</option>
        </select>
        <div className={e.containTypes}>
            <h2>Tipo</h2>
            <p className={typesActual === 'All' ? e.active : null} onClick={() => handleFilterByTypes('All')}>Todos los tipos</p>
            {
                types.length && types.map(t =>
                    <p className={typesActual === t ? e.active : null} onClick={() => handleFilterByTypes(t)} key={t} value={t}>{t}</p>
                )
            }
        </div>
        <div className={e.containOrder}>
            <p onClick={() => handleFilterByOrder('asc')}>A-Z</p>
            <p onClick={() => handleFilterByOrder('desc')}>Z-A</p>
            <p onClick={() => handleFilterByOrder('fuerte')}>Mayor Ataque</p>
            <p onClick={() => handleFilterByOrder('debil')}>Menor Ataque</p>
        </div>
    </div>
  )
}

export default Filters