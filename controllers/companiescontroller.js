const fs = require('fs');
const Companies = require('../models/companiesmodels.js');
//get all companies
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
 //create new company
 exports.createcompany = (req, res) => {
   const path = './images/'+Date.now()+'.png'
   const base64Data = req.body.companyimage.replace(/^data:([A-Za-z-+/]+);base64,/, '');
   fs.writeFileSync(path, base64Data,  {encoding: 'base64'});
   var company = new Companies(
     { 
      name: req.body.companydata.name,
      username:req.body.companydata.username,
      company_name:req.body.companydata.company_name,
      company_address:req.body.companydata.company_address,
      gstno:req.body.companydata.gstno,
      latitude:req.body.companydata.latitude,
      longitude:req.body.companydata.longitude,
      landmark:req.body.companydata.landmark,
      locality:req.body.companydata.locality,
      city_id:req.body.companydata.city_id,
      state_id:req.body.companydata.state_id,
      country_id:req.body.companydata.country_id,
      pincode:req.body.companydata.pincode,
      mobileno:req.body.companydata.mobileno,
      alternatemobileno:req.body.companydata.alternatemobileno,
      email:req.body.companydata.email,
      alternateemail:req.body.companydata.alternateemail,
      password:req.body.companydata.password,
      pre_booking_hours:req.body.companydata.pre_booking_hours,
      company_type:req.body.companydata.company_type,
      company_image:path,
     }
     );
     company.save(function (err, company) {
      if (err)
      {
        return res.status(500).json(err);
      } 
      else
      {
        var response = {
          status  : "success"
         }
         res.end(JSON.stringify(response));
      }
      
    });
}
//get company by id
exports.getcompanybyid = (req, res) => {
var companyid=req.query.id;
try {
  Companies.find({_id:companyid},function(err,company){
      if(Object.keys(company).length === 0)
      {
        res.send({ status: "no data" });  
      }
      else
      {
        res.send({ status:"success",company: company});   
      }
      
     })
      
     } catch (e) {
       res.send({ status: "Error in Fetching user" });
     }
};