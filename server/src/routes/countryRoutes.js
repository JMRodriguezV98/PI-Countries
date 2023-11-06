const { Router } = require( 'express' );
const { getCountriesHandler, getCountryByIdHandler } = require('../handlers/countriesHandler');

const countriesRouter = Router();

countriesRouter.get( '/',getCountriesHandler );
countriesRouter.get( '/:idCountry',getCountryByIdHandler );

module.exports = countriesRouter;