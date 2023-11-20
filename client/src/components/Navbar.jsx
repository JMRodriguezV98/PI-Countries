import styles from './Navbar.module.css'
import logo from '../assets/logoHenryCountry.svg';

const Navbar = ( { onHandleSubmit,onHandleChange } ) => {
  return (
    <>
        <div className={ styles.contentNavbar }>
            <div className={ styles.contentLogo }>
                <img id={ styles.logo } src={ logo } alt="Logo" />
            </div>
            <div className={ styles.contentSections }>
                <h3>Home</h3>
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