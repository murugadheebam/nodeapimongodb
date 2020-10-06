const express = require('express');
const router = express.Router();
const bikes = require('../controllers/bikescontroller.js');
router.get('/getallbikes', bikes.getallbikes);

module.exports = router;

