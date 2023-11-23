import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom';



const Card = ({country}) => {

  const { name,continent,image,id,population } = country;

  return (
    <>
      <Link className={ styles.link } to={`/detail/${id}`} >
        <div className={ styles.containCard }>
          <div className={ styles.contentImage }>
            <img className={ styles.image } src={ image } alt="imagen del pais" />
          </div>
          <div className={ styles.contentInfo }>
            <h3 className={ styles.h3Titles } >
              <p className={ styles.titles }>Nombre:</p>
              { name }
            </h3>
            <h3 className={ styles.h3Titles }>
              <p className={ styles.titles }>Continente:</p>
              { continent }
            </h3>
            <h3 className={ styles.h3Titles }>
              <p className={ styles.titles }>Poblacion:</p> 
              { population }
            </h3>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Card