const mongoose = require('mongoose');
// mongoose.set("debug", (collectionName, method, query, doc) => {
//     console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
// });
const BikeimagesSchema = mongoose.Schema({
    src: String,
    bike_id:{ type: mongoose.Schema.Types.ObjectId, ref: "Bikes"},
    status:Number
   
});

module.exports = mongoose.model('bike_images', BikeimagesSchema);