import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByCreateOrNot, filterByOrder, filterByTypes, setCurrentPage } from '../redux/actions'
import e from '../styles/Filters.module.css'

const Filters = (props) => {
    
    const types = useSelector(e => e.types)
    const dataPoke = useSelector(e => e.getDataPokemons)
    const typesActual = useSelector(e => e.typesActual)
    const orderActual = useSelector(e => e.orderActual)
    const createDbOrNot = useSelector(e => e.createDbOrNot)

    const dispatch = useDispatch()
    
    const handleFilterByTypes= e => {
        dispatch(filterByTypes(e))
        dispatch(setCurrentPage(1))
        dispatch(filterByOrder('asc'))
        props.paginado(1)
    }
    const handleFilterByOrder = e => {
        dispatch(filterByOrder(e))
        // dispatch(setCurrentPage(1))
        // props.paginado(1)
        props.ordenador(`Ordenado ${e}`)
    }
    const handleFilterByCreate= e => {
        dispatch(filterByCreateOrNot(e))
        dispatch(filterByOrder('asc'))
        dispatch(setCurrentPage(1))
        props.paginado(1)
    }  
  return (
    <div className={props.createActive? e.contain : e.blur}>
        <div className={e.containCreated}>
            <h2>Creados</h2>
            <p className={createDbOrNot === 'All' ? e.active : null} onClick={() => handleFilterByCreate('All')}>Todos los pokemones</p>
            <p className={createDbOrNot === 'getApi' ? e.active : null} onClick={() => handleFilterByCreate('getApi')}>pokemones existentes</p>
            <p className={createDbOrNot === 'getDB' ? e.active : null} onClick={() => handleFilterByCreate('getDB')}>pokemones creados</p>
        </div>
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
            <h2>Orden</h2>
        {
            !dataPoke.hasOwnProperty('msg') ? 
                <>
                    <p className={orderActual === 'asc' ? e.active : null} onClick={() => handleFilterByOrder('asc')}>A-Z</p>
                    <p className={orderActual === 'desc' ? e.active : null} onClick={() => handleFilterByOrder('desc')}>Z-A</p>
                    <p className={orderActual === 'fuerte' ? e.active : null} onClick={() => handleFilterByOrder('fuerte')}>Mayor Ataque</p>
                    <p className={orderActual === 'debil' ? e.active : null} onClick={() => handleFilterByOrder('debil')}>Menor Ataque</p>
                </>
            :
                <>
                    <p className={e.desabilitado}>A-Z</p>
                    <p className={e.desabilitado}>Z-A</p>
                    <p className={e.desabilitado}>Mayor Ataque</p>
                    <p className={e.desabilitado}>Menor Ataque</p>
                </>
        }
        </div>
        
    </div>
  )
}

export default Filters