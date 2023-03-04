import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import e from '../styles/FormCreate.module.css'
import {postPoke} from '../redux/actions/index'
import { IoClose } from 'react-icons/io5';


function validate(input,boolean) {
  let errors = {};
  if(boolean === true) {
    errors.name = 'Este Pokémon ya existe' 
  };
  if (!input.name) {
    errors.name = 'Se requiere un Nombre'
  }

  if (input.types.length === 0) {
    errors.types = 'Tienes que seleccionar al menos un tipo';
  } else if(input.types.length > 2) {
    errors.types = 'No puedes elegir más de dos tipos';
  };

  if (input.height > 1000) {
    errors.height = 'Maximo 1000 metros';
  } else if(input.height < 0) {
      errors.height = 'Los valores negativos no están permitidos'
  }

  if(input.weight > 10000) {
    errors.weight = 'Maximo 10,000 Kg';
}  else if(input.weight < 0) {
    errors.weight = 'Los valores negativos no están permitidos'
} 


  return errors;
}


const FormCreatePoke = ({input, setInput, objInput,setCreateActive,createActive}) => {

  const types = useSelector(e => e.types)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const getAllDataPokemons = useSelector(e => e.getAllDataPokemons);

  const [errors,setErrors] = useState({})

  const handleChange = (e) => {
    
    
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
    
    const pokeRepetido = getAllDataPokemons.some(p => p.name.toLowerCase() === input.name.toLowerCase())
    setErrors(validate({
      ...input,
      [e.target.name] : e.target.value
    },pokeRepetido))
  }

  const handleTypes = (e) => {
    setInput({
      ...input,
      types: [...input.types,e.target.value]
    })
    setErrors(validate({
      ...input,
      types: [...input.types, e.target.value]
  }));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postPoke(input))
    alert('Pokemon Creado Correctamente')
    setInput(objInput)
    navigate(0)
    setCreateActive(!createActive)
  }

  return (
    <form className={e.container} onSubmit={e=>handleSubmit(e)}>

      <div>
          <h1>Crear Pokemon</h1>
      </div>

      <div>

        <div>

          <div>
            <label>Nombre del pokemon</label>
            <input type="text" name='name'  onChange={handleChange} value={input.name}/>
            <span className={e.errorName}>{errors?.name}</span>
          </div>

          <div>
            <span>Vida: {input.hp}</span>
            <input type="range" min='0' max='500' name='hp' value={input.hp} onChange={handleChange}/>
          </div>

          <div>
            <span>attack: {input.attack}</span>
            <input type="range" min='0' max='500' name='attack' value={input.attack} onChange={handleChange}/>
          </div>

          <div>
            <span>defense: {input.defense}</span>
            <input type="range" min='0' max='500' name='defense' value={input.defense} onChange={handleChange}/>
          </div>

          <div>
            <span>speed: {input.speed}</span>
            <input type="range" min='0' max='500' name='speed' value={input.speed} onChange={handleChange}/>
          </div>

          <div>
            <span>Peso (kg):</span>
            <input type="number" name='weight' value={input.weight} onChange={handleChange}/>
            <span className={e.errorWeight}>{errors?.weight}</span>
          </div>

          <div>
            <span>Altura (Metros):</span>
            <input type="number" name='height' value={input.height} onChange={handleChange}/>
            <span className={e.errorHeight}>{errors?.height}</span>
          </div>

          <div>
            <span>imagen (url):</span>
            <input type="text" name='image' value={input.image} placeholder={'URL...'} onChange={handleChange}/>
          </div>

          

          <div>
            <span>Seleccionar Tipo</span>
            <select onChange={(e) => handleTypes(e)} disabled={input.types.length === 2 ? true : false}>
              
              {
                  types?.map(t =>
                      <option value={t}>{t}</option>
                  )
              }
            </select>
            <span className={e.errorTypes}>{errors?.types}</span>
          </div>

          <div>
            <ul>
              {input.types.map(type =>  
                  <div className={`${e.divTypes} ${e[type]}`}>
                      <li className={e.liTypes}> {type} </li>
                      <IoClose className={e.deleteBtn} /*onClick={(e) => handleDelete(type, e)}*/ color='#000' />
                  </div>                    
              )}
            </ul>
          </div>

        </div>

        <div></div>

      </div>
        
      <button type='submit' disabled={errors.name || errors.weight || errors.height || errors.types || input.name === '' || !input.types.length ? true : false}>Crear</button>
    </form>
  )
}

export default FormCreatePoke