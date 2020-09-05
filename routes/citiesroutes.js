const express = require('express');
const router = express.Router();
const cities = require('../controllers/citiescontroller.js');
router.get('/getcitiesby_stateid', cities.getcitiesby_stateid);
module.exports = router;

