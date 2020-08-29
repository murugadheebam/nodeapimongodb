const express = require('express');
const router = express.Router();
const companies = require('../controllers/companiescontroller.js');
router.get('/getallcompanies', companies.getallcompanies);
module.exports = router;

