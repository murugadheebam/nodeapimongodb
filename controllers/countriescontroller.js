const Countries = require('../models/countriesmodels.js');
exports.getallcountries = (req, res) => {
   try {
    Countries.find(function(err,countries){
        if(Object.keys(countries).length === 0)
        {
          res.send({ status: "no data" });  
        }
        else
        {
          res.send({ status:"success",countries: countries });   
        }
        
       })
        
       } catch (e) {
         res.send({ status: "Error in Fetching user" });
       }
 };
 exports.getstatesby_countryid = (req, res) => {
  var countryid=req.query.countryid;
  try {
   Countries.find(function(err,countries){
       if(Object.keys(countries).length === 0)
       {
         res.send({ status: "no data" });  
       }
       else
       {
         res.send({ status:"success",countries: countries });   
       }
       
      })
       
      } catch (e) {
        res.send({ status: "Error in Fetching user" });
      }
};