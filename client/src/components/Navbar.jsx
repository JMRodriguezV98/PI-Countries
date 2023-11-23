import styles from './Navbar.module.css'
import logo from '../assets/logoHenryCountry.svg';
import { Link } from 'react-router-dom';

const url = 'http://localhost:5173/'

const Navbar = ( { onHandleSubmit,onHandleChange } ) => {
  return (
    <>
        <div className={ styles.contentNavbar }>
            <Link className={ styles.link } to={'/'}>
                <div className={ styles.contentLogo }>
                    <img id={ styles.logo } src={ logo } alt="Logo" />
                </div>
            </Link>
            <div className={ styles.contentSections }>
                <Link className={ styles.link } to={'/home'}>
                    <h3>HOME</h3>
                </Link>
                {
                    window.location.href !== `${url}form` && 
                    (
                        <Link className={ styles.link } to={'/form'}>
                            <h3>ACTIVIDADES</h3>
                        </Link>
                    ) 
                }
            </div>
            {
                window.location.href === `${url}home` && 
                (
                    <div className={ styles.contentSearchBar }>
                        <label>Buscar pais</label>
                        <div className={ styles.search } >
                            <input type="text" onChange={ onHandleChange } />
                            <button className={ styles.buttonSearch } onClick={ onHandleSubmit } type='submit'>Search</button>
                        </div>
                    </div>
                )
            }
        </div>
    </>
  )
}

export default Navbar