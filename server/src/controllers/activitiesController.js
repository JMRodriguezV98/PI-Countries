const { Activities,Countries } = require( '../db' );

const postActivityController = async ( name,difficulty,duration,season,countries ) => {
    const newActivity = await Activities.create({
        name,
        difficulty,
        duration,
        season
    })

    countries.forEach( async ( country ) => {
        const countryDB = await Countries.findOne({
            where: { name: country }
        })
        await newActivity.addCountry( countryDB );
    });

    return newActivity;
}

const getActivitiesController = async () => {
    const activitiesDB = await Activities.findAll({
        include: [
          {
            model: Countries,
            attributes: [ 'name' ],
            through: { attributes: [] },
          },
        ],
    });

    return activitiesDB;
}

module.exports = {
    postActivityController,
    getActivitiesController
}