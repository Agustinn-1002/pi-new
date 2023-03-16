import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getSearchPokeByName, searchValue } from '../redux/actions'
import e from '../styles/SearchBar.module.css'

const SearchBar = ({falseLoader,setPaginaActual}) => {
  const dispatch = useDispatch()
  
  const name = useSelector(e=>e.serchText)

  const changeInput = (e) => {
    e.preventDefault()
    dispatch(searchValue(e.target.value))
    dispatch(getSearchPokeByName(e.target.value))
    setPaginaActual(1)
  }

  return (
    <form className={e.container}>
      <input 
        type="text" 
        placeholder='Buscar Nombre ...'
        onChange={(e) => changeInput(e)}
        value={name}
        className={e.container}
      />
    </form>
  )
}

export default SearchBar