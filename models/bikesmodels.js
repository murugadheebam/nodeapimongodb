const mongoose = require('mongoose');

const BikesSchema = mongoose.Schema({
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: "Companies"},
    bikeregistrationno:String,
    model_id:{ type: mongoose.Schema.Types.ObjectId, ref: "Bikemodels"},
    dateofpurchase:{ type: Date,default: ''},
    status:Number,
    hire_status:Number,
    decline_reason:String,
    approved_by:{ type: mongoose.Schema.Types.ObjectId, ref: "Users"},
    created_at: {type: Date,default:new Date().toISOString()},
    updated_at:{ type: Date,default: ''},
    approved_at:{ type: Date,default: ''},
   
});

module.exports = mongoose.model('bike', BikesSchema);