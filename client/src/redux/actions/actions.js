import axios from "axios";
import { GET_BY_NAME, GET_COUNTRIES } from "./action-Types";


export const getCountries = () => {
    return async ( dispatch ) => {
        try {
            const response = await axios( 'http://localhost:3001/countries/' );
            dispatch({
                type: GET_COUNTRIES,
                payload: response.data
            })
        } catch (error) {
            alert( error.response.data.error );
        }
    }
}

export const getCountriesByName = ( nameCountry ) => {
    return async ( dispatch ) => {
        try {
            const response = await axios( `http://localhost:3001/countries/?countryName=${ nameCountry }` );
            dispatch({
                type: GET_BY_NAME,
                payload: response.data
            })
        } catch (error) {
            
        }
    }
}