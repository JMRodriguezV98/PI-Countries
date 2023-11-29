import { 
    FILTER,
    FILTER_ACTIVITY,
    GET_ACTIVITIES,
    GET_BY_ID,
    GET_COUNTRIES, 
    ORDER, PAGINATE, RESET } from "../actions/action-Types";


let initialState = {
    allCountries: [],
    countriesCopy: [],
    countryDetail: {},
    activities: [],
    countriesOrder: [],
    currentPage: 0,
    countryFiltered: [],
    countryFilteredCopy: [],
    filter: false,
    filterActivity: false,
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
            const firstIndex = ( targetPage - 1 ) * itemsXPage;

            if( state.filter ){
                if( targetPage < 1 || targetPage > ( Math.ceil( state.countryFiltered.length/10 ) ) ){
                    return state;
                }

                return{
                    ...state,
                    allCountries: [ ...state.countryFiltered ].slice( firstIndex, firstIndex + itemsXPage ),
                    currentPage: targetPage,
                }
            }

            if( targetPage < 1 || targetPage > totalPages ){
                return state;
            }

            return{
                ...state,
                allCountries: [ ...state.countriesCopy ].slice( firstIndex, firstIndex + itemsXPage ),
                currentPage: targetPage,
            }

        case FILTER:

            if( action.payload.name === 'continentSelect' ){
                const filterByContinent = [ ...state.countriesCopy ].filter( ( country ) => country.continent.includes( action.payload.value ) );
                return{
                    ...state,
                    allCountries: filterByContinent.slice( 0,itemsXPage ),
                    countryFiltered: filterByContinent,
                    countryFilteredCopy: filterByContinent,
                    filter: true
                }
            }else if( state.filter && action.payload.name === 'activitySelect' ){
                const filterByActivity = [ ...state.countryFilteredCopy ].filter( ( country ) => country.Activities.some( activity => activity.name.includes( action.payload.value ) ) );
                return{
                    ...state,
                    allCountries: filterByActivity.slice( 0,itemsXPage ),
                    countryFiltered: filterByActivity,
                }
            }else if( !state.filter && action.payload.name === 'activitySelect' ){
                const filterByActivity = [ ...state.countriesCopy ].filter( ( country ) => country.Activities.some( activity => activity.name.includes( action.payload.value ) ) );
                return{
                    ...state,
                    allCountries: filterByActivity.slice( 0,itemsXPage ),
                    countryFiltered: filterByActivity,
                    countryFilteredCopy: filterByActivity,
                    filterActivity: true,
                } 
            }

        case RESET:
            return{
                ...state,
                filter: false,
                allCountries: state.countriesCopy.slice( 0,itemsXPage )
            }

        case GET_ACTIVITIES:
            return{
                ...state,
                activities: [ ...action.payload ],
                allCountries: [ ...state.countriesCopy ].slice( 0,itemsXPage ),
            }

        default: 
            return state
    }
}

export default rootReducer;