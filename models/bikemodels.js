const mongoose = require('mongoose');

const BikemodelsSchema = mongoose.Schema({
    name: String,
    delete_status:Number
   
});

module.exports = mongoose.model('bikemodels', BikemodelsSchema);