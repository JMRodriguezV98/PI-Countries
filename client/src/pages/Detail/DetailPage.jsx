import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Detail.module.css'
import Navbar from '../../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryById } from '../../redux/actions/actions';

const DetailPage = () => {

  const { id } = useParams();

  const dispatch = useDispatch();
  const countryDetail = useSelector( ( state ) =>  state.countryDetail );
  const { name,image,continent,capital,area,population,rubregion } = countryDetail;

  useEffect(() => {
    dispatch( getCountryById( id ) );
  },[ dispatch,id ])
  

  return (
    <>
      <div className={ styles.contentDetail }>
        <Navbar />
        <div className={ styles.contentCardDetail }>
          <div className={ styles.card }>
            <div className={ styles.flagContent }>
              <img className={ styles.flag } src={ image } alt={ `Bandera de ${ name }` } />
            </div>
            <div>
              <h3>{ id }</h3>
              <h3>{ name }</h3>
              <h3>{ continent }</h3>
              <h3>{ capital }</h3>
              <h3>{ rubregion }</h3>
              <h3>{ area }</h3>
              <h3>{ population }</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPage