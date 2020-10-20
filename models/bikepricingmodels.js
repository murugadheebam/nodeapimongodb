const mongoose = require('mongoose');
mongoose.set("debug", (collectionName, method, query, doc) => {
    console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});
const BikepricingmodelsSchema = mongoose.Schema({
    bpmid:{ type: mongoose.Schema.Types.ObjectId, ref: "Bikepricingmaster"},
    bike_id:{ type: mongoose.Schema.Types.ObjectId, ref: "Bikes"},
    normal_price:Number,
    weekend_price:Number,
    delete_status:Number
    
   
});

module.exports = mongoose.model('bike_pricing', BikepricingmodelsSchema);