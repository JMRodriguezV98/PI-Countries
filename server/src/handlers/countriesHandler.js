const { getCountriesController,getCountryByIdController } = require("../controllers/countriesController");


const getCountriesHandler = async ( req,res ) => {
    try{
        const response = await getCountriesController();
        res.status( 200 ).json( response );
    } catch( error ){
        // Buscar como mandar un error en lugar de retornar el mensaje
        return error.message;
    }
}

const getCountryByIdHandler = async ( req,res ) => {
    const { idCountry } = req.params;
    try{
        const response = await getCountryByIdController( idCountry );
        res.status( 200 ).json( response );
    }catch ( error ) {
        res.status( 404 ).json( { error: error.message } );
    }
}

module.exports = {
    getCountryByIdHandler,
    getCountriesHandler,
}