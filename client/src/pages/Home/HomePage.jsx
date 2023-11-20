import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getCountries, getCountriesByName } from '../../redux/actions/actions'
import Cards from '../../components/Cards/Cards'
import Navbar from '../../components/Navbar'
import styles from './HomePage.module.css'

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
      <Navbar onHandleChange={ onHandleChange } onHandleSubmit={ onHandleSubmit } />
      <div className={ styles.principalHome } >
        <Cards allCountries = { allCountries } />
      </div>
    </>
  )
}

export default HomePage