import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom';



const Card = ({country}) => {

  const { name,continent,image,id } = country;

  return (
    <>
      <Link to={`/detail/${id}`} >
        <div className={ styles.containCard }>
          <div className={ styles.contentImage }>
            <img className={ styles.image } src={ image } alt="imagen del pais" />
          </div>
          <h3>{ name }</h3>
          <h3>{ continent }</h3>
        </div>
      </Link>
    </>
  )
}

export default Card