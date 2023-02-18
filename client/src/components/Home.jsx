import React, {useState, useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getdataPoke } from '../redux/actions'
import Cards from './Cards'
import Loader from './Loader'


const Home = () => {

  const dispatch = useDispatch()
  const dataPoke = useSelector(e => e.getAllDataPokemons)
  
  useEffect(() => {
    dispatch(getdataPoke())
  },[])

  return (
    <div>
      
      {dataPoke.length == 0 ? <Loader/> : 
        <>
          <Cards/>
        </>
      }
    </div>
  )
}

export default Home