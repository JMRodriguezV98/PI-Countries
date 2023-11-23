import axios from "axios";
import { GET_BY_ID, GET_BY_NAME, GET_COUNTRIES, ORDER, PAGINATE } from "./action-Types";


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
                // type: GET_BY_NAME,
                type: GET_COUNTRIES,
                payload: response.data
            })
        } catch (error) {
            alert( error.response.data.error );
        }
    }
}

export const getCountryById = ( idCountry ) => {
    return async ( dispatch ) => {
        try {
            const response = await axios( `http://localhost:3001/countries/${ idCountry }` );
            dispatch({
                type: GET_BY_ID,
                payload: response.data
            })
        } catch (error) {
            alert( error.response.data.error );
        }
    }
}

export const postActivity = ( actividad ) => {
    return async ( dispatch ) => {
        try {
            await axios.post('http://localhost:3001/activities/',actividad );
            alert( 'Actividad creada con exito' );
        } catch (error) {
            alert( error.response.data.error )
        }
    }
}

export const orderCountries = ( order ) => {
    return ( dispatch ) => {
        try {
            dispatch({
                type: ORDER,
                payload: order
            })
        } catch (error) {
            alert( error );
        }
    }
}

export const paginateCountries = ( controlPage ) => {
    return ( dispatch ) => {
        dispatch({
            type: PAGINATE,
            payload: controlPage
        })
    }
}