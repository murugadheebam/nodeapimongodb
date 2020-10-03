const express = require('express');
const router = express.Router();
const users = require('../controllers/userscontroller.js');
router.get('/getallusers', users.getallusers);
router.post('/createuser', users.createuser);
router.get('/getuserbyid', users.getuserbyid);

module.exports = router;

