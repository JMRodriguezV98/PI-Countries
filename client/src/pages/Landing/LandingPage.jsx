import React from 'react'
import styles from "./LandingPage.module.css";
import imagenFondo from '../../assets/fondo.svg';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <div className={ styles.principalLanding } >
        <Link id={ styles.contentButton } to='/home' >
          <button id={ styles.buttonLogin } >LOGIN</button>
        </Link>
        <img className={ styles.imagenfondo } src={ imagenFondo } alt="imagen de fondo" />
      </div>
    </>
  )
}

export default LandingPage