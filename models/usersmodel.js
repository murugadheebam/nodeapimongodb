const mongoose = require('mongoose');

const CompaniesSchema = mongoose.Schema({
    name: String,
    username:String,
    company_name:String,
    company_address:String,
    gstno:String,
    latitude:String,
    longitude:String,
    landmark:String,
    locality:String,
    city_id:{ type: mongoose.Schema.Types.ObjectId, ref: "Cities"},
    state_id:{ type: mongoose.Schema.Types.ObjectId, ref: "States"},
    country_id:{ type: mongoose.Schema.Types.ObjectId, ref: "Countries"},
    pincode:Number,
    mobileno:Number,
    alternatemobileno:Number,
    email:String,
    alternateemail:String,
    password:String,
    status:{ type: Number,default: 0},
    delete_status:{ type: Number,default: 0},
    created_at: {type: Date,default:new Date().toISOString()},
    updated_at:{ type: Date,default: ''},
    last_login:{ type: Date,default: ''},
    pre_booking_hours:Number,
    company_type:Number,
    company_image:String
});

module.exports = mongoose.model('companies', CompaniesSchema);