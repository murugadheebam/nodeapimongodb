const express = require('express');
const router = express.Router();
const bikes = require('../controllers/bikescontroller.js');
router.get('/getallbikes', bikes.getallbikes);
router.get('/getallbikemodels', bikes.getallbikemodels);
router.post('/createbike', bikes.createbike);

module.exports = router;

