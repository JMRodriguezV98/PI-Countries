import Navbar from '../../components/Navbar'
import ActivityForm from '../../components/form/ActivityForm'
import styles from './FormPage.module.css'

const FormPage = () => {
  return (
    <>
      <div className={ styles.containerForm } >
        <Navbar />
        <ActivityForm />
      </div>
    </>
  )
}

export default FormPage