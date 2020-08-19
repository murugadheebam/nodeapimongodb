const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var urlencode = bodyParser.urlencoded({ extended: true});

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var AuthusersRoutes = require('./routes/authusersroutes');

app.use('/authusers', AuthusersRoutes);

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.listen(3000, function() {
    console.log('listening on 3000')
  })
  module.exports = app;
