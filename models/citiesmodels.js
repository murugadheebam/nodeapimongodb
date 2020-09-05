const mongoose = require('mongoose');

const CitiesSchema = mongoose.Schema({
    name:String,
    state_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "States"
      }
});

module.exports = mongoose.model('cities', CitiesSchema);