import styles from './Navbar.module.css'
import logo from '../assets/logoHenryCountry.svg';
import { Link } from 'react-router-dom';

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
                    <h3>Home</h3>
                </Link>
                <h3>Activities</h3>
            </div>
            <div className={ styles.contentSearchBar }>
                <label>Country</label>
                <div className={ styles.search } >
                    <input type="text" onChange={ onHandleChange } />
                    <button onClick={ onHandleSubmit } type='submit'>Search</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar