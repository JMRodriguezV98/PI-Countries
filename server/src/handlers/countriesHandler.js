const { getCountriesController } = require("../controllers/countriesController");


const getCountriesHandler = async ( req,res ) => {
    try{
        const respuesta = await getCountriesController();
        res.status( 200 ).json( respuesta );
    } catch( error ){
        res.status( 404 ).json( { error: error.message } )
    }
}

module.exports = {
    getCountriesHandler,
}