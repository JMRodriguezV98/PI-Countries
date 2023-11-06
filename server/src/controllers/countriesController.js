const axios = require( 'axios' );
const { cleanInfoAPI } = require( '../utils' );
const { Countries } = require( '../db' );

//ruta del api
const api = 'http://localhost:5000/countries';

const getCountriesController = async() => {
    const response = await axios( api ); 
    const countriesDB = await Countries.findAll();
    const countries = cleanInfoAPI( response );

    if( !countriesDB.length ){
        countries.forEach( async ( country ) => {
            await Countries.findOrCreate({
                where: { 
                    id: country.id,
                    name: country.name,
                    image: country.image,
                    continent: country.continent,
                    capital: country.capital === false ? 'false' : country.capital,
                    subregion: country.subregion !== false ? 'false' : country.subregion,
                    area: country.area,
                    population: country.population
                }
            })
        })
    }

    return countries;
}

const getCountryByIdController = async( idCountry ) => {
    const countryByIdBD = await Countries.findByPk( idCountry );
    
    if( idCountry.length > 3 || idCountry.length < 3 ){
        throw new Error( `El id debe ser de 3 letras` )
    }

    if( countryByIdBD === null ){
        throw new Error( `No se encuentran resultados con el id: ${ idCountry }` );
    }

    return countryByIdBD;
}

module.exports = {
    getCountriesController,
    getCountryByIdController
}