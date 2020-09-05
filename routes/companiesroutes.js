const express = require('express');
const router = express.Router();
const companies = require('../controllers/companiescontroller.js');
router.get('/getallcompanies', companies.getallcompanies);
router.post('/createcompany', companies.createcompany);
router.get('/getcompanybyid', companies.getcompanybyid);

module.exports = router;

