const { Router } = require("express");
const countriesRouter = require("./countryRoutes");

const router = Router();

router.use( '/countries',countriesRouter );

module.exports = router;
