import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getCountries, getCountriesByName, orderCountries, paginateCountries } from '../../redux/actions/actions'
import Cards from '../../components/Cards/Cards'
import Navbar from '../../components/Navbar'
import styles from './HomePage.module.css'
import Ordenamiento from '../../components/filtersOrders/Ordenamiento'
import Paginado from '../../components/Paginado/Paginado'

const HomePage = () => {

  const dispatch = useDispatch();

  const allCountries = useSelector( ( state ) =>  state.allCountries );

  const [ searchString,setsearchString ] = useState('');

  const onHandleChange = ( event ) => {
    setsearchString( event.target.value );
  }

  const onHandleSubmit = ( event ) => {
    event.preventDefault();
    dispatch( getCountriesByName( searchString ) );
  }

  useEffect(() => {
    dispatch( getCountries() );
  },[ dispatch ])

  return (
    <>
      <div className={ styles.principalContent }>
        <Navbar onHandleChange={ onHandleChange } onHandleSubmit={ onHandleSubmit } />
        <Ordenamiento />
        <Paginado />
        <div className={ styles.principalHome } >
          <Cards allCountries = { allCountries } />
        </div>
        <footer className={ styles.footer }>Javier Mauricio Rodriguez Villamil</footer>
      </div>
    </>
  )
}

export default HomePage