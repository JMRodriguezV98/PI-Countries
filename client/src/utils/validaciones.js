
export const validate = ( input,inputName,error,setError,countriesArray ) => {
    if( inputName === 'name' ){
      if( input.name === '' ){
        setError({
          ...error,
          name: 'Campo requerido'
        })
      }else if( /[^a-zA-Z0-9 ]/.test( input.name ) ){
        setError({
          ...error,
          name: 'No es permitido tener caracteres especiales'
        })
      }else{
        setError({
          ...error,
          name: ''
        })
      }
    }else if( inputName === 'difficulty' ){
      if( input.difficulty === '' ){
        setError({
          ...error,
          difficulty: 'Campo requerido'
        })
      }else if( isNaN( input.difficulty ) ){
        setError({
          ...error,
          difficulty: 'Este campo debe ser unicamente numerico'
        })
      }else if( input.difficulty < 1 || input.difficulty > 5 ){
        setError({
          ...error,
          difficulty: 'El valor de dificultad debe ser un numero entero entre 1 y 5'
        })
      }else{
        setError({
          ...error,
          difficulty: ''
        })
      }
    }else if( inputName === 'season' ){
      if( input.season === '' ){
        setError({
          ...error,
          season: 'Campo requerido'
        })
      }else{
        setError({
          ...error,
          season: ''
        })
      }
    }else if( inputName === 'countries' ){
        if( countriesArray.lenth < 0 ){
            setError({
                ...error,
                countries: 'Debe seleccionar almenos un pais'
            })
        }else{
            setError({
                ...error,
                countries: ''
            })
        }
    }
  }