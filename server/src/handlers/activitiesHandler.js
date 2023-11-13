const { postActivityController, getActivitiesController } = require("../controllers/activitiesController");


const postActivitiesHandler = async ( req,res ) => {
    try {
        const { name,difficulty,duration,season,countries } = req.body;
        const response = await postActivityController( name,difficulty,duration,season,countries );
        res.status( 201 ).json( response );
    } catch (error) {
        res.status( 404 ).json( { error: error.message } );
    }
}

const getActivitiesHandler = async ( req,res ) => {
    try {
        const response = await getActivitiesController();
        res.status( 200 ).json( response );
    } catch (error) {
        res.status( 404 ).json( { error: error.message } ); 
    }
}

module.exports = {
    postActivitiesHandler,
    getActivitiesHandler
}