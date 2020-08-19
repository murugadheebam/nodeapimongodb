const mongoose = require('mongoose');

const AuthusersSchema = mongoose.Schema({
    username: String,
    password:String,
    name:String

});

module.exports = mongoose.model('authusers', AuthusersSchema);