const express = require('express');
const router = express.Router();
const users = require('../controllers/userscontroller.js');
router.get('/getallusers', users.getallusers);
module.exports = router;

