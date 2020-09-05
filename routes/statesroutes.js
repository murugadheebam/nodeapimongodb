const express = require('express');
const router = express.Router();
const states = require('../controllers/statescontroller.js');
router.get('/getstatesby_countryid', states.getstatesby_countryid);
module.exports = router;

