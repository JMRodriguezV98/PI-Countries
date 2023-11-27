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

  useEffect(() => {
    dispatch( getCountryById( id ) );
  },[ dispatch,id ]);
  
  const { Activities,area,capital,continent,image,name,population,subregion } = countryDetail;

  return (
    <>
      <div className={ styles.contentDetail }>
        <Navbar />
        <div className={ styles.contentCardDetail }>
          <div className={ styles.card }>
            <div className={ styles.flagContent }>
              <img className={ styles.flag } src={ image } alt={ `Bandera de ${ name }` } />
            </div>
            <div className={ styles.contentInfo }>
              <div className={ styles.divInfo }>
                <p>id:</p>
                <h3>{ id }</h3>
              </div>
              <div className={ styles.divInfo }>
                <p>Nombre:</p>
                <h3>{ name }</h3>
              </div>
              <div className={ styles.divInfo }>
                <p>Continente:</p>
                <h3>{ continent }</h3>
              </div>
              <div className={ styles.divInfo }>
                <p>Capital:</p>
                <h3>{ capital }</h3>
              </div>
              <div className={ styles.divInfo }>
                <p>Subregion:</p>
                <h3>{ subregion }</h3>
              </div>
              <div className={ styles.divInfo }>
                <p>Area:</p>
                <h3>{ area }</h3>
              </div>
              <div className={ styles.divInfo }>
                <p>Poblacion:</p>
                <h3>{ population }</h3>
              </div>
              <div className={ styles.divInfo }>
                <p>Actividades:</p>
                { 
                  Activities && Activities.map( ( actividad ) => <h3 key={ actividad.name }>{ actividad.name }</h3> )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPage