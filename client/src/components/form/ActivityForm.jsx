import { useEffect, useState } from 'react'
import styles from './ActivityForm.module.css'
import { validate } from '../../utils/validaciones'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, postActivity } from '../../redux/actions/actions'

const ActivityForm = () => {

  const dispatch = useDispatch();

  const allCountries = useSelector( ( state ) => state.countriesCopy );
  const [ countriesArray,setCountriesArray ] = useState([]);

  useEffect( () => {
    dispatch( getCountries() )
  },[ dispatch ])

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
    season: 'Selecciona una estacion',
    countries: 'Selecciona almenos un pais'
  })

  const handleChange = ( event ) => {
    if( event.target.name === 'difficulty' ){
      let number = parseInt( event.target.value );
      setInput({
        ...input,
        difficulty: number
      })
    }else if( event.target.name === 'countries' ){
      if( !countriesArray.includes( event.target.value ) ){
        setCountriesArray( [ ...countriesArray,event.target.value ] );

        setInput({
          ...input,
          countries: [ ...input.countries,event.target.value ]
        });
        
      }
    }else if( event.target.name === 'season' ){
      setInput({
        ...input,
        season: event.target.value
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
    }, event.target.name,error,setError,countriesArray );
  }

  const handleSubmit = ( event ) => {
    event.preventDefault();

    const valueCountry = document.getElementById( 'countrySelect' );
    const valueSeason = document.getElementById( 'seasonSelect' );
    valueCountry.value = 'Selecciona el pais';
    valueSeason.value = 'Selecciona la estacion';

    setInput({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      countries: []
    })

    setCountriesArray([]);

    setError({
      name: 'campo requerido',
      difficulty: 'Campo requerido',
      duration: '',
      season: 'Selecciona una estacion',
      countries: 'Selecciona almenos un pais'
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
                  <label >Duracion de la actividad (horas) </label>
                  <input name='duration' type="number" onChange={ handleChange } value={ input.duration } />
                  <span>{ error.duration }</span>
                </div>
                <div className={ styles.fieldsContent } >
                  <label >Temporada</label>
                  <select id="seasonSelect" name="season" onChange={ handleChange }>
                    <option hidden>Seleccione estacion</option>
                    <option value="Primavera">Primavera</option>
                    <option value="Verano">Verano</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Invierno">Invierno</option>
                  </select>
                  <span>{ error.season }</span>
                </div>
                <div className={ styles.fieldsContent } >
                  <label >Pais al que pertenece</label>
                  <select id='countrySelect' name="countries" onChange={ handleChange } >
                    <option hidden>Selecciona el pais</option>
                    {
                      allCountries.map( country => <option key={ country.id } value={ country.name }>{ country.name }</option>)
                    }
                  </select>
                  <span>{ error.countries }</span>
                  { countriesArray.map( country => {
                    return(
                      <span key={ country } >{ country }</span>  
                    )
                  }) }
                </div>
                {
                  error.name || error.difficulty || error.season || error.countries ? null : <button type='submit'>Crear actividad</button>
                }
            </form>
        </div>
    </>
  )
}

export default ActivityForm