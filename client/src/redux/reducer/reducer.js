import { GET_BY_ID, GET_BY_NAME, GET_COUNTRIES } from "../actions/action-Types";


let initialState = {
    allCountries: [],
    countriesCopy: [],
    countryDetail: {},
    activities: []
}

function rootReducer( state = initialState,action  ){
    switch( action.type ){
        case GET_COUNTRIES:
            return{
                ...state,
                allCountries: action.payload,
                countriesCopy: action.payload
            }
        
        case GET_BY_NAME:
            return{
                ...state,
                allCountries: action.payload
            }

        case GET_BY_ID:
            return{
                ...state,
                countryDetail: action.payload
            }

        default: 
            return state
    }
}

export default rootReducer;