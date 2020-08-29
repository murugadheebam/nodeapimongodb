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
    city_id:Number,
    state_id:Number,
    country_id:Number,
    pincode:Number,
    mobileno:Number,
    alternatemobileno:Number,
    email:String,
    alternateemail:String,
    password:String,
    status:Number,
    delete_status:Number,
    created_at: {type: Date, default: Date.now},
    updated_at:{ type: Date },
    last_login:{ type: Date },
    pre_booking_hours:Number,
    company_type:Number,
    company_image:String

});

module.exports = mongoose.model('companies', CompaniesSchema);