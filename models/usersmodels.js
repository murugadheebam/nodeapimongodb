const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    username:String,
    password:String,
    address:String,
    mobileno:Number,
    emailid:String,
    latitude:String,
    longitude:String,
    licenceno:String,
    licenseexpirydate:String,
    licensefrontimage:String,
    licensebackimage:String,
    profile_pic:String,
    status:Number,
    delete_status:Number,
    created_at: {type: Date,default:new Date().toISOString()},
    updated_at:{ type: Date,default: ''},
    last_login:{ type: Date,default: ''},
    licenseissuedate:{ type: Date,default: ''},
    city_id:{ type: mongoose.Schema.Types.ObjectId, ref: "Cities"},
    state_id:{ type: mongoose.Schema.Types.ObjectId, ref: "States"},
    country_id:{ type: mongoose.Schema.Types.ObjectId, ref: "Countries"},
    dob:{ type: Date,default: ''},
    gender:String,
    locality:String,
    decline_reason:String
});

module.exports = mongoose.model('users', UsersSchema);