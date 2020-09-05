const Cities = require('../models/citiesmodels.js');
exports.getcitiesby_stateid = (req, res) => {
    var stateid=req.query.stateid;
    console.log(stateid);
    try {
        Cities.find({state_id:stateid},function(err,cities){
          console.log(cities);
         if(Object.keys(cities).length === 0)
         {
           res.send({ status: "no data" });  
         }
         else
         {
           res.send({ status:"success",cities: cities });   
         }
         
        })
         
        } catch (e) {
          res.send({ status: "Error in Fetching user" });
        }
  };