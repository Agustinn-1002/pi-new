import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import e from '../styles/FormCreate.module.css'
import {postPoke} from '../redux/actions/index'
import { IoClose } from 'react-icons/io5';

const FormCreatePoke = ({input, setInput, objInput,setCreateActive,createActive}) => {

  const types = useSelector(e => e.types)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const handleTypes = (e) => {
    setInput({
      ...input,
      types: [...input.types,e.target.value]
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postPoke(input))
    alert('Pokemon Creado Correctamente')
    setInput(objInput)
    navigate(0)
    setCreateActive(!createActive)
  }

  console.log(input);
  return (
    <form className={e.container} onSubmit={e=>handleSubmit(e)}>

      <div>
          <h1>Crear Pokemon</h1>
      </div>

      <div>

        <div>

          <div>
            <label>Nombre del pokemon</label>
            <input type="text" name='name' value={input.name} onChange={handleChange}/>
          </div>

          <div>
            <span>Vida</span>
            <input type="range" min='0' max='500' name='hp' value={input.hp} onChange={handleChange}/>
          </div>

          <div>
            <span>attack</span>
            <input type="range" min='0' max='500' name='attack' value={input.attack} onChange={handleChange}/>
          </div>

          <div>
            <span>defense</span>
            <input type="range" min='0' max='500' name='defense' value={input.defense} onChange={handleChange}/>
          </div>

          <div>
            <span>speed</span>
            <input type="range" min='0' max='500' name='speed' value={input.speed} onChange={handleChange}/>
          </div>

          <div>
            <span>Peso (kg):</span>
            <input type="number" name='weight' value={input.spweighteed} onChange={handleChange}/>
          </div>

          <div>
            <span>Altura (Metros):</span>
            <input type="number" name='height' value={input.height} onChange={handleChange}/>
          </div>

          <div>
            <span>imagen (url):</span>
            <input type="text" name='image' value={input.image} onChange={handleChange}/>
          </div>

          

          <div>
            <span>Seleccionar Tipo</span>
            <select onChange={handleTypes}>
              {
                  types.length && types.map(t =>
                      <option key={t} value={t}>{t}</option>
                  )
              }
            </select>
          </div>

          <div>
            <ul>
              {input.types.map(type =>  
                  <div className={`${e.divTypes} ${e[type]}`}>
                      <li className={e.liTypes}> {type} </li>
                      <IoClose className={e.deleteBtn} /*onClick={(e) => handleDelete(type, e)}*/ color='white' />
                  </div>                    
              )}
            </ul>
          </div>

        </div>

        <div></div>

      </div>

      
        <button type='submit' >Crear</button>
      
    </form>
  )
}

export default FormCreatePoke