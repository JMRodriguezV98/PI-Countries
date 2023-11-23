import { useDispatch } from 'react-redux';
import { orderCountries } from '../../redux/actions/actions';
import styles from './Orderamiento.module.css'

const Ordenamiento = () => {

    const dispatch = useDispatch();

    const handleOrderCountries = ( event ) => {
        dispatch( orderCountries( event.target.value ) );
    }

  return (
    <>
        <div className={ styles.contentFilters }>
          <h4>Filtros/Ordenamientos:</h4>
          <div className={ styles.contentOrders }>
            <h4>Orden Alfabetico</h4>
            <select onChange={ handleOrderCountries } >
              <option hidden>Ordenar</option>
              <option value="AZ">A-Z</option>
              <option value="ZA">Z-A</option>
            </select>
          </div>
          <div className={ styles.contentOrders }>
            <h4>Ordenar por poblacion</h4>
            <select onChange={ handleOrderCountries } >
              <option hidden>Ordenar</option>
              <option value="MIN">MIN-MAX</option>
              <option value="MAX">MAX-MIN</option>
            </select>
          </div>
          
        </div>
    </>
  )
}

export default Ordenamiento