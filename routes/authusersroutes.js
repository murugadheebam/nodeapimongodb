const express = require('express');
const router = express.Router();
const authusers = require('../controllers/authuserscontroller.js');
router.post('/authuserlogin', authusers.authuserlogin);
module.exports = router;

