const { Router } = require( 'express' );
const { getCountriesHandler } = require('../handlers/countriesHandler');

const countriesRouter = Router();

countriesRouter.get( '/', getCountriesHandler );

module.exports = countriesRouter;