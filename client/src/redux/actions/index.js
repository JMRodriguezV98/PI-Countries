import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";

export const getCountries = () => {
    return async function( dispatch ){
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