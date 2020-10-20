const mongoose = require('mongoose');
// mongoose.set("debug", (collectionName, method, query, doc) => {
//     console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
// });
const PromotionsmodelsSchema = mongoose.Schema({
    name: String,
    description:String,
    cost:Number,
    no_of_breaks:Number,
    validity_period:Number,
    package_plan_type:Number,
    remainder_day:Number,
    status:Number
   
});

module.exports = mongoose.model('promotions', PromotionsmodelsSchema);