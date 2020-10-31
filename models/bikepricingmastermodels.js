const mongoose = require('mongoose');
// mongoose.set("debug", (collectionName, method, query, doc) => {
//     console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
// });
const BikepricingmastermodelsSchema = mongoose.Schema({
    pricingname: String,
    hours:Number,
    pricingdescription:String,
    delete_status:Number
    
   
});

module.exports = mongoose.model('bike_pricing_master', BikepricingmastermodelsSchema,'bike_pricing_master');