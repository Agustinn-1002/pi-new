import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../redux/actions'
import e from '../styles/Paginado.module.css'

const Paginado = ({pokePorPagina , dataPoke , paginado}) => {
    const pageNumbers = []

    for (let i = 0; i <= Math.floor(dataPoke/pokePorPagina); i++) {
        pageNumbers.push(i+1)
    }

    const activePage = useSelector(e => e.currentPage)
    const dispatch = useDispatch()

    return (
        <nav className={e.conteiner}>
                {pageNumbers && pageNumbers.map(i => 
                    <div key={i} onClick={() => {
                        dispatch(setCurrentPage(i));
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                          })
                        }}>
                        <a className={activePage == i ? `${e.active} ${e.element }`: e.element} key={i} onClick={() => paginado(i)}>{i}</a>
                    </div>
                )}
        </nav>
    )
}

export default Paginado