const { Router } = require( 'express' );
const { getCountryByIdHandler, getCountryByNameHandler } = require('../handlers/countriesHandler');

const countriesRouter = Router();

countriesRouter.get( '/',getCountryByNameHandler );
countriesRouter.get( '/:idCountry',getCountryByIdHandler );

module.exports = countriesRouter;