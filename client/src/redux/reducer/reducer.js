import { 
    GET_BY_ID, 
    // GET_BY_NAME, 
    GET_COUNTRIES, 
    ORDER, PAGINATE } from "../actions/action-Types";


let initialState = {
    allCountries: [],
    countriesCopy: [],
    countryDetail: {},
    countriesOrder: [],
    currentPage: 0
}

function rootReducer( state = initialState,action  ){
    const itemsXPage = 10;
    switch( action.type ){
        case GET_COUNTRIES:
            return{
                ...state,
                allCountries: [ ...action.payload ].splice( 0,itemsXPage ),
                countriesCopy: action.payload,
                currentPage: 0
            }

        case GET_BY_ID:
            return{
                ...state,
                countryDetail: action.payload
            }
        
        case ORDER:
            let filterByOrder = [ ...state.allCountries ];

            if( action.payload === 'AZ' ){
                filterByOrder = filterByOrder.sort( ( a,b ) => {
                    return a.name.localeCompare( b.name );
                })
            }

            if( action.payload === 'ZA' ){
                filterByOrder = filterByOrder.sort( ( a,b ) => {
                    return b.name.localeCompare( a.name )
                })
            }

            if( action.payload === 'MIN' ){
                filterByOrder = filterByOrder.sort( ( a,b ) => {
                    return a.population - b.population;
                })
            }

            if( action.payload === 'MAX' ){
                filterByOrder = filterByOrder.sort( ( a,b ) => {
                    return b.population - a.population;
                })
            }

            return{
                ...state,
                allCountries: filterByOrder,
                countriesOrder: filterByOrder,
            }

        case PAGINATE:
            
            const targetPage = action.payload === 'NEXT' 
            ? state.currentPage + 1 
            : action.payload === 'PREV' 
            ? state.currentPage - 1 
            : parseInt( action.payload,10 );

            
            const totalPages = state.countriesCopy.length / 10;

            if( targetPage < 1 || targetPage > totalPages ){
                return state;
            }

            const firstIndex = ( targetPage - 1 ) * itemsXPage;

            return{
                ...state,
                allCountries: [ ...state.countriesCopy ].slice( firstIndex, firstIndex + itemsXPage ),
                currentPage: targetPage,
            }

            

        default: 
            return state
    }
}

export default rootReducer;