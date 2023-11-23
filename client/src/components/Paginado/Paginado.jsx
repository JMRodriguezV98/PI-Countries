import { useDispatch, useSelector } from 'react-redux';
import { paginateCountries } from '../../redux/actions/actions';

const Paginado = () => {

    const dispatch = useDispatch();

    const currentPage = useSelector( state => state.currentPage );
    const totalPages = useSelector( state => ( state.countriesCopy.length / 10 ) );

    const renderPagesButtons = () => {
        const buttons = [];
        for( let i = 0; i < totalPages; i++ ){
            buttons.push(
                <button key={i} onClick={ handlePaginate } name={ String( i + 1) } >{ i + 1 }</button>
            )
        }
        return buttons;
    }

    const handlePaginate = ( event ) => {
        dispatch( paginateCountries( event.target.name ) );
    }

  return (
    <>
        <div>
          <label>Paginado</label>
          <button onClick={ handlePaginate } name='PREV'>Prev</button>
          {
            renderPagesButtons()
          }
          <button onClick={ handlePaginate } name='NEXT'>Next</button>
        </div>
    </>
  )
}

export default Paginado