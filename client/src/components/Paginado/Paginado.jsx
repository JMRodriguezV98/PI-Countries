import { useDispatch, useSelector } from 'react-redux';
import { paginateCountries } from '../../redux/actions/actions';
import styles from './Paginado.module.css'

const Paginado = () => {

    const dispatch = useDispatch();

    const filtros = useSelector( state => ( state.filter ) );
    const totalPagesFiltered = useSelector( state => Math.ceil( state.countryFiltered.length / 10 ) );
    const totalPages = useSelector( state => ( state.countriesCopy.length / 10 ) );

    const renderPagesButtons = () => {
        const buttons = [];
        if( filtros ){
            for( let i = 0; i < totalPagesFiltered; i++ ){
                buttons.push(
                    <button className={ styles.buttonsPag } key={i} onClick={ handlePaginate } name={ String( i + 1) } >{ i + 1 }</button>
                )
            }
            return buttons;
        }

        for( let i = 0; i < totalPages; i++ ){
            buttons.push(
                <button className={ styles.buttonsPag } key={i} onClick={ handlePaginate } name={ String( i + 1) } >{ i + 1 }</button>
            )
        }
        
        return buttons;
    }

    const handlePaginate = ( event ) => {
        dispatch( paginateCountries( event.target.name ) );
    }

  return (
    <>
        <div className={ styles.contentPaginado }>
          <button className={ styles.buttonsNextPrev } onClick={ handlePaginate } name='PREV'>Prev</button>
          {
            renderPagesButtons()
          }
          <button className={ styles.buttonsNextPrev } onClick={ handlePaginate } name='NEXT'>Next</button>
        </div>
    </>
  )
}

export default Paginado