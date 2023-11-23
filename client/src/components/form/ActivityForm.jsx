import { useEffect, useState } from 'react'
import styles from './ActivityForm.module.css'
import { validate } from '../../utils/validaciones'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, postActivity } from '../../redux/actions/actions'

const ActivityForm = () => {

  const dispatch = useDispatch();

  const allCountries = useSelector( ( state ) => state.allCountries );

  useEffect( () => {
    dispatch( getCountries() )
  })

  const [ input,setInput ] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: []
  })

  const [ error,setError ] = useState({
    name: 'campo requerido',
    difficulty: 'Campo requerido',
    duration: '',
    season: 'Campo requerido',
    countries: ''
  })

  const handleChange = ( event ) => {
    if( event.target.name === 'difficulty' ){
      let number = parseInt( event.target.value );
      setInput({
        ...input,
        difficulty: number
      })
    }else if( event.target.name === 'countries' ){
      setInput({
        ...input,
        countries: [ ...input.countries,event.target.value ]
      })
    }else{
      setInput({
        ...input,
        [event.target.name]: event.target.value
      })
    }

    validate({
      ...input,
      [event.target.name]: event.target.value,
    }, event.target.name,error,setError )
  }

  const handleSubmit = ( event ) => {
    event.preventDefault();
    setInput({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      countries: []
    })

    dispatch( postActivity( input ) );
  }
  

  return (
    <>
        <div className={ styles.principal }>
            <form className={ styles.formContent } onSubmit={ handleSubmit }>
                <div className={ styles.fieldsContent } >
                  <label>Nombre actividad</label>
                  <input name='name' type="text" onChange={ handleChange } value={ input.name }/>
                  <span>{ error.name }</span>
                </div>
                <div className={ styles.fieldsContent } >
                  <label >Dificultad de la actividad</label>
                  <input name='difficulty' type="number" onChange={ handleChange } value={ input.difficulty } />
                  <span>{ error.difficulty }</span>
                </div>
                <div className={ styles.fieldsContent } >
                  <label >Duracion de la actividad</label>
                  <input name='duration' type="number" onChange={ handleChange } value={ input.duration } />
                  <span>{ error.duration }</span>
                </div>
                <div className={ styles.fieldsContent } >
                  <label >Temporada</label>
                  <input name='season' type="text" onChange={ handleChange } value={ input.season } />
                  <span>{ error.season }</span>
                </div>
                <div className={ styles.fieldsContent } >
                  <label >Pais al que pertenece</label>
                  <select name="countries" onChange={ handleChange } >
                    <option hidden>Selecciona el pais</option>
                    {
                      allCountries.map( country => <option key={ country.id } value={ country.name }>{ country.name }</option>)
                    }
                  </select>
                  <span>{ error.countries }</span>
                </div>
                {
                  error.name || error.difficulty || error.season ? null : <button type='submit'>Crear actividad</button>
                }
            </form>
        </div>
    </>
  )
}

export default ActivityForm