import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getCountries } from '../../redux/actions'
import Cards from '../../components/Cards/Cards'
import Navbar from '../../components/Navbar'
import styles from './HomePage.module.css'

const HomePage = () => {

  const dispatch = useDispatch();

  const allCountries = useSelector( (state) =>  state.allCountries );

  useEffect(() => {
    dispatch( getCountries() );
  },[ dispatch ])
  

  return (
    <>
      <Navbar />
      <div className={ styles.principalHome } >
        <Cards allCountries = { allCountries } />
      </div>
    </>
  )
}

export default HomePage