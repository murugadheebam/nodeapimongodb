const mongoose = require('mongoose');
// mongoose.set("debug", (collectionName, method, query, doc) => {
//     console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
// });
const BikemodelsSchema = mongoose.Schema({
    name: String,
    delete_status:Number
   
});

module.exports = mongoose.model('bike_models', BikemodelsSchema);