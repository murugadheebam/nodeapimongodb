const Companies = require('../models/companiesmodels.js');
exports.getallcompanies = (req, res) => {
   try {
    Companies.find(function(err,companies){
        if(Object.keys(companies).length === 0)
        {
          res.send({ status: "no data" });  
        }
        else
        {
          res.send({ status:"success",companies: companies });   
        }
        
       })
        
       } catch (e) {
         res.send({ status: "Error in Fetching user" });
       }
 };