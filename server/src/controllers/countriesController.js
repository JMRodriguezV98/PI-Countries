const axios = require( 'axios' );
const { cleanInfoAPI } = require( '../utils' );
const { Countries,Activities } = require( '../db' );
const { Op } = require('sequelize');

//ruta del api
const api = 'http://localhost:5000/countries';

const getCountriesController = async() => {
    const response = await axios( api ); 
    const countriesDB = await Countries.findAll();
    const countries = cleanInfoAPI( response );

    if (!countriesDB.length) {
        countries.forEach(async (country) => {
            const countryData = {
                id: country.id,
                name: country.name.toLowerCase(),
                image: country.image,
                continent: country.continent,
                capital: country.capital === false ? 'false' : country.capital,
                area: country.area,
                population: country.population
            };

            if ( country.subregion ) {
                countryData.subregion = country.subregion;
            }

            await Countries.findOrCreate({
                where: countryData
            });
        });
    }
}

const getCountryByIdController = async( idCountry ) => {
    const countryByIdBD = await Countries.findAll({
        where: { id: idCountry },
        include: [
            {
              model: Activities,
              attributes: [ 'name' ],
              through: { attributes: [] },
            },
        ],
    });
    
    if( idCountry.length > 3 || idCountry.length < 3 ){
        throw new Error( `El id debe ser de 3 letras` );
    }

    if( countryByIdBD === null ){
        throw new Error( `No se encuentran resultados con el id: ${ idCountry }` );
    }

    return countryByIdBD;
}

const getCountryByNameController = async ( countryName ) => {
    const countryByName = await Countries.findAll({
        include: [
            {
                model: Activities,
                attributes: [ 'name' ],
                through: { attributes: [] },
            },
        ],
        where: {
            name: {
                [ Op.like ]: `%${ countryName }%` 
            }
        }
    })

    if( countryByName.length === 0 ){
        throw new Error( `No se encontraron paises con las coincidencias ${ countryName }` );
    }

    return countryByName;
}

const getCountries = async () => {
    const countriesDB = await Countries.findAll({
        include: [
            {
              model: Activities,
              attributes: [ 'name' ],
              through: { attributes: [] },
            },
        ],
    });

    return countriesDB
}

module.exports = {
    getCountriesController,
    getCountryByIdController,
    getCountryByNameController,
    getCountries
}