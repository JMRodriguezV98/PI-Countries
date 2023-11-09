const { getCountriesController,getCountryByIdController, getCountryByNameController } = require("../controllers/countriesController");


const getCountriesAndSaveDBHandler = async ( req,res ) => {
    try{
        await getCountriesController();
    } catch( error ){
        // Buscar como mandar un error en lugar de retornar el mensaje
        return error.message;
    }
}

const getCountryByIdHandler = async ( req,res ) => {
    try{
        const { idCountry } = req.params;
        const response = await getCountryByIdController( idCountry );
        res.status( 200 ).json( response );
    }catch ( error ) {
        res.status( 404 ).json( { error: error.message } );
    }
}

const getCountryByNameHandler = async ( req,res ) => {
    try {
        const { countryName } = req.query;
        const countryNameLower = countryName.toLowerCase();
        const response = await getCountryByNameController( countryNameLower );
        res.status( 200 ).json( response );
    } catch (error) {
        res.status( 404 ).json( { error: error.message } );
    }
}

module.exports = {
    getCountriesAndSaveDBHandler,
    getCountryByIdHandler,
    getCountryByNameHandler,
}