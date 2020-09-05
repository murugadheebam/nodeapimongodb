const mongoose = require('mongoose');

const StatesSchema = mongoose.Schema({
    name:String,
    country_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Countries"
      }
});

module.exports = mongoose.model('states', StatesSchema);