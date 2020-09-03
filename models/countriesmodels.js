const mongoose = require('mongoose');

const CountriesSchema = mongoose.Schema({
    sortname: String,
    name:String,
    phonecode:Number

});

module.exports = mongoose.model('countries', CountriesSchema);