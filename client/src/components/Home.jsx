import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { filterByOrder, getdataPoke, getTypes } from '../redux/actions'
import Cards from './Cards'
import Loader from './Loader'


const Home = () => {

  const dispatch = useDispatch()
  const dataAllPoke = useSelector(e => e.getAllDataPokemons)
  
  useEffect(() => {
    dispatch(getdataPoke())
    dispatch(getTypes())
  },[])

  return (
    <div>
      
      {dataAllPoke.length === 0 ? <Loader/> : 
        <>
          <Cards/>
        </>
      }
    </div>
  )
}

export default Home