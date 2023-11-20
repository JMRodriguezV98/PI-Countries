import React from 'react'
import styles from './Card.module.css'

const Card = ({country}) => {

  const { name,continent,image } = country;

  return (
    <>
      <div className={ styles.containCard }>
        <div className={ styles.contentImage }>
          <img className={ styles.image } src={ image } alt="imagen del pais" />
        </div>
        <h3>{ name }</h3>
        <h3>{ continent }</h3>
      </div>
    </>
  )
}

export default Card