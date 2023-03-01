import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { getSearchPokeByName } from '../redux/actions'

const SearchBar = ({falseLoader}) => {
  const dispatch = useDispatch()
  const [name , setName] = useState('')

  const changeInput = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getSearchPokeByName(name))
    setName('')
    falseLoader()
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder='Buscar Nombre ...'
        onChange={(e) => changeInput(e)}
        value={name}
      />
      <button onClick={(e)=>handleSubmit(e)} type='submit'>Buscar</button>
    </div>
  )
}

export default SearchBar