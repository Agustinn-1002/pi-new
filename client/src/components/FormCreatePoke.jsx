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

  const handleDelete = (type, e) => {
    e.preventDefault();
    setInput({
        ...input,
        types: input.types.filter(t => t !== type)
    })
}

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postPoke(input))
    setInput(objInput)
    navigate('/Home')
    setCreateActive(!createActive)
    navigate(0)
  }

  return (
    <form className={e.container} onSubmit={e=>handleSubmit(e)}>

      <div>
          <h1>Crear Pokemon</h1>
      </div>

      <div className={e.formImage}>

        <div className={e.formData}>

          <div className={e.status}>
            <p>Nombre del pokemon</p>
            <input className={errors.name ? e.errorInput : ''} placeholder='Nombre...' type="text" name='name' onChange={handleChange} value={input.name}/>
            <p className={e.errorName}>{errors?.name}</p>
          </div>

          <div className={e.range}>
            <p>Vida:</p>
            <input type="range" min='0' max='500' name='hp' value={input.hp} onChange={handleChange}/>
            <span>{input.hp}</span>
          </div>

          <div className={e.range}>
            <p>attack:</p>
            <input type="range" min='0' max='500' name='attack' value={input.attack} onChange={handleChange}/>
            <span>{input.attack}</span>
          </div>

          <div className={e.range}>
            <p>defense:</p>
            <input type="range" min='0' max='500' name='defense' value={input.defense} onChange={handleChange}/>
            <span>{input.defense}</span>
          </div>

          <div className={e.range}>
            <p>speed:</p>
            <input type="range" min='0' max='500' name='speed' value={input.speed} onChange={handleChange}/>
            <span>{input.speed}</span>
          </div>

          <div className={e.range}>
            <p>Peso (kg):</p>
            <input className={errors.weight ? e.errorInput : ''} type="number" name='weight' value={input.weight} onChange={handleChange}/>
            <p className={e.errorHeight}>{errors?.weight}</p>
          </div>

          <div className={e.range}>
            <p>Altura (Mts):</p>
            <input className={errors.height ? e.errorInput : ''} type="number" name='height' value={input.height} onChange={handleChange}/>
            <p className={e.errorHeight}>{errors?.height}</p>
          </div>

          <div className={e.range}>
            <p>imagen (url):</p>
            <input  type="text" name='image' value={input.image} placeholder={'URL...'} onChange={handleChange}/>
          </div>

          

          <div className={e.typeContain}>
            <p>Seleccionar Tipo: </p>
            <select className={errors.types ? e.errorInput : ''} onChange={(e) => handleTypes(e)} disabled={input.types.length === 2 ? true : false}>
              
              {
                  types?.map(t =>
                      <option value={t}>{t}</option>
                  )
              }
            </select>
            <p className={e.errorName}>{errors?.types}</p>
          </div>

          <div className={e.typeSelect}>
              {input.types.map(type =>  
                  <div className={e.divTypes}>
                      <b className={e.liTypes}> {type} </b>
                      <IoClose color='#fff' className={e.deleteBtn} onClick={(e) => handleDelete(type, e)} />
                  </div>                    
              )}
          </div>

        </div>

        <div>
          {
            input.image.length ? 
              <img className={e.imagePrevew} src={input.image} alt="imgPokemon"/>
              : 
              <img className={e.imagePrevew} src='https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg' alt="imgPokemon"/>
          }
        </div>

      </div>
        
      <button 
        className={errors.name || errors.weight || errors.height || errors.types || input.name === '' || !input.types.length ? e.submitButtonDisable : e.submitButton} 
        type='submit' 
        disabled={errors.name || errors.weight || errors.height || errors.types || input.name === '' || !input.types.length ? true : false}>Crear</button>
    </form>
  )
}

export default FormCreatePoke