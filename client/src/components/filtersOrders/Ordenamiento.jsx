import { useDispatch, useSelector } from 'react-redux';
import { filterCountryCotinent, getActivities, orderCountries, resetFilter } from '../../redux/actions/actions';
import styles from './Orderamiento.module.css'
import { useEffect } from 'react';

const Ordenamiento = () => {

    const dispatch = useDispatch();

    const activities = useSelector( state => state.activities );
    const allCountries = useSelector( state => state.countriesCopy );
    const continents = allCountries.map( country => country.continent );
    const optionContinent = [ ...new Set( continents) ];

    const handleOrderCountries = ( event ) => {
        dispatch( orderCountries( event.target.value ) );
    }

    const handleFilterCountry = ( event ) => {
        dispatch( filterCountryCotinent( event.target.value,event.target.name ) );
    }

    const handleReset = () => {
        const filtro = document.getElementById( 'filterContinent' );
        const order = document.getElementById( 'alphabetic' );
        const  population = document.getElementById( 'population' );
        const actividadFiltro = document.getElementById( 'filterActivity' );
        filtro.value = 'Continente';
        order.value = 'Ordenar';
        population.value = 'Ordenar';
        actividadFiltro.value = 'Actividad';
        dispatch( resetFilter() );
    }

    useEffect(() => {
      dispatch( getActivities() );
    }, [dispatch])
    

  return (
    <>
        <div className={ styles.contentFilters }>
            <div className={ styles.contentOrders }>
                <h4>Orden Alfabetico</h4>
                <select id='alphabetic' onChange={ handleOrderCountries } >
                <option hidden>Ordenar</option>
                <option value="AZ">A-Z</option>
                <option value="ZA">Z-A</option>
                </select>
            </div>
            <div className={ styles.contentOrders }>
                <h4>Ordenar por poblacion</h4>
                <select id='population' onChange={ handleOrderCountries } >
                <option hidden>Ordenar</option>
                <option value="MIN">MIN-MAX</option>
                <option value="MAX">MAX-MIN</option>
                </select>
            </div>
            <div className={ styles.contentOrders }>
                <h4>Filtro por continente</h4>
                <select id='filterContinent' name='continentSelect' onChange={ handleFilterCountry } >
                <option hidden>Continente</option>
                {
                    optionContinent.map( continent => {
                        return(
                            <option key={ continent } value={ continent } >{ continent }</option>
                        ) 
                    })
                }
                </select>
            </div>
            <div className={ styles.contentOrders }>
                <h4>Filtro por actividades</h4>
                <select id='filterActivity' name='activitySelect' onChange={ handleFilterCountry } >
                <option hidden>Actividad</option>
                {
                    activities.map( ({ name,id }) => {
                        return(
                            <option key={ id } value={ name } name='activity' >{ name }</option>
                        )
                    })
                }
                </select>
            </div>
            <div className={ styles.contentOrders }>
                <h4>Resetear filtros</h4>
                <button className={ styles.reset } onClick={ handleReset } >RESET</button>
            </div>
        </div>
    </>
  )
}

export default Ordenamiento;