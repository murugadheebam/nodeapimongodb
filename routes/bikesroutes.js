const express = require('express');
const router = express.Router();
const multer = require('multer');
const bikes = require('../controllers/bikescontroller.js');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+'-'+file.originalname);
    }
});
const upload = multer({ storage });
router.get('/getallbikes', bikes.getallbikes);
router.get('/getallbikemodels', bikes.getallbikemodels);
router.post('/createbike',upload.single('file'),bikes.createbike);
router.post('/uploadbikeimage',upload.single('file'),function(req, res, next){
    res.send({filename:req.file.filename});

});
router.get('/getallbikepricing', bikes.getallbikepricing);

module.exports = router;

