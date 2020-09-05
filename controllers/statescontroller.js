const States = require('../models/statesmodels.js');
exports.getstatesby_countryid = (req, res) => {
    var countryid=req.query.countryid;
    try {
      States.find({country_id:countryid},function(err,states){
         if(Object.keys(states).length === 0)
         {
           res.send({ status: "no data" });  
         }
         else
         {
           res.send({ status:"success",states: states });   
         }
         
        })
         
        } catch (e) {
          res.send({ status: "Error in Fetching user" });
        }
  };