import React from 'react'
import Card from '../Card/Card'
import styles from './Cards.module.css'

const Cards = ({ allCountries }) => {
  return (
    <>
        <div className={ styles.contentCards }>
          { allCountries?.map( ( country ) => (
            <Card key={ country.id } country={ country } />
          ))}
        </div>
    </>
  )
}

export default Cards