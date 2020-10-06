const Bikes = require('../models/bikesmodels.js');
//get all bikes
exports.getallbikes = (req, res) => {
    try {
        Bikes.find(function(err,bikes){
         if(Object.keys(bikes).length === 0)
         {
           res.send({ status: "no data" });  
         }
         else
         {
           res.send({ status:"success",bikes: bikes });   
         }
         
        })
         
        } catch (e) {
          res.send({ status: "Error in Fetching user" });
        }
  };