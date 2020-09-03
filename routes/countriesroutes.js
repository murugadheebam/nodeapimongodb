const express = require('express');
const router = express.Router();
const countries = require('../controllers/countriescontroller.js');
router.get('/getallcountries', countries.getallcountries);
router.get('/getstatesby_countryid', countries.getstatesby_countryid);

module.exports = router;

