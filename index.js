const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors())
var corsOptions = {
    origin: 'http://localhost:4200/',
  }
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var AuthusersRoutes = require('./routes/authusersroutes');
var CompaniesRoutes = require('./routes/companiesroutes');
var CountriesRoutes = require('./routes/countriesroutes');
var StatesRoutes = require('./routes/statesroutes');
var CitiesRoutes = require('./routes/citiesroutes');
var UsersRoutes = require('./routes/usersroutes');

app.use('/authusers', AuthusersRoutes);
app.use('/companies', CompaniesRoutes);
app.use('/countries', CountriesRoutes);
app.use('/states', StatesRoutes);
app.use('/cities', CitiesRoutes);
app.use('/users', UsersRoutes);

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
