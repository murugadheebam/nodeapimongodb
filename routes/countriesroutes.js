const express = require('express');
const router = express.Router();
const countries = require('../controllers/countriescontroller.js');
router.get('/getallcountries', countries.getallcountries);
module.exports = router;

