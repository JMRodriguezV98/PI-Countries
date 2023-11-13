const { Router } = require("express");
const countriesRouter = require("./countryRoutes");
const activitiesRoutes = require("./activitiesRoutes");

const router = Router();

router.use( '/countries',countriesRouter );
router.use( '/activities',activitiesRoutes );

module.exports = router;
