import { GET_COUNTRIES } from "../actions";


let initialState = {
    allCountries: [],
    activities: []
}

function rootReducer( state = initialState,action  ){
    switch( action.type ){
        case GET_COUNTRIES:
            return{
                ...state,
                allCountries: action.payload
            }

        default: 
            return state
    }
}

export default rootReducer;