const mongoose = require('mongoose');
// mongoose.set("debug", (collectionName, method, query, doc) => {
//     console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
// });
const BikepromotionsmodelsSchema = mongoose.Schema({
    promotion_id: { type: mongoose.Schema.Types.ObjectId, ref: "Promotions"},
    bike_id:{ type: mongoose.Schema.Types.ObjectId, ref: "Bikes"},
    status:Number
   
});

module.exports = mongoose.model('bike_promotion', BikepromotionsmodelsSchema);