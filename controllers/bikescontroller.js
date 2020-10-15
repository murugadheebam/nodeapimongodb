const Bikes = require('../models/bikesmodels.js');
const Bikemodels = require('../models/bikemodels.js');
const Bikeimages = require('../models/bikeimagesmodels.js');

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
  //get all bike models
  exports.getallbikemodels = (req, res) => {
    try {
      Bikemodels.find(function(err,bikemodels){
         if(Object.keys(bikemodels).length === 0)
         {
           res.send({ status: "no data" });  
         }
         else
         {
           res.send({ status:"success",bikemodels: bikemodels });   
         }
         
        })
         
        } catch (e) {
          res.send({ status: "Error in Fetching user" });
        }
  };
  //create bike
  exports.createbike = (req, res) => {
    // console.log(req.headers);
    // req.on('data', (data) => {
    //   console.log(data.toString());
    // });
    // const path = './images/'+Date.now()+'.png'
    // //const base64Data = req.body.companyimage.replace(/^data:([A-Za-z-+/]+);base64,/, '');
    // //fs.writeFileSync(path, base64Data,  {encoding: 'base64'});
    //   var bike = new Bikes(
    //   { 
    //    company_id: req.body.companydata.name,
    //    bikeregistrationno:req.body.companydata.username,
    //    model_id:req.body.companydata.company_name,
    //    dateofpurchase:req.body.companydata.company_address,
    //    status:0,
    //    hire_status:0,
    //    decline_reason:"",
    //    approved_by:"",
    //   }
    //   );
    //   bike.save(function (err, bike) {
    //    if (err)
    //    {
    //      return res.status(500).json(err);
    //    } 
    //    else
    //    {
    //     //  var response = {
    //     //    status  : "success"
    //     //   }
    //     //   res.end(JSON.stringify(response));
    //     var lastinserted_id=bike.insertedId;
        

    //    }
       
    //  });
 }