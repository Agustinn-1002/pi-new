import React from 'react'
import e from '../styles/Paginado.module.css'

const Paginado = ({pokePorPagina , dataPoke , paginado}) => {
    const pageNumbers = []

    for (let i = 0; i <= Math.floor(dataPoke/pokePorPagina); i++) {
        pageNumbers.push(i+1)
    }

    return (
        <nav className={e.conteiner}>
                {pageNumbers && pageNumbers.map(e => 
                    <a className={e.index} key={e} onClick={() => paginado(e)}>{e}</a>
                )}
        </nav>
    )
}

export default Paginado