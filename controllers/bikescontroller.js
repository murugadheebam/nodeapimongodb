const Bikes = require('../models/bikesmodels.js');
const Bikemodels = require('../models/bikemodels.js');
const Bikeimages = require('../models/bikeimagesmodels.js');
const Bikepricingmaster = require('../models/bikepricingmastermodels.js');
const Promotions = require('../models/promotionsmodels.js');
const Bikepricing = require('../models/bikepricingmodels.js');
const Bikepromotion = require('../models/bikepromotionmodels.js');

//get all bikes
exports.getallbikes = (req, res) => {
    try {
        Bikes.aggregate([{
            $lookup:
            {
               from: 'bike_models',
               localField: 'model_id',
               foreignField: '_id',
               as: 'bike_models'
            }
         },
         {
          $lookup: {
              from: "companies",
              localField: "company_id",
              foreignField: "_id",
              as: "companies"
          } 
        } 
        ],function(err, bikes) {
         if (err)
          throw err;
          res.send({ bikes: bikes });
  
         
  
      });
    }
    catch (e) {
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
    //console.log(req.body);
     var bike_pricing=JSON.parse(req.body.bike_pricing);
     var bikeimages=JSON.parse(req.body.bike_images);
     var bikepromotions=JSON.parse(req.body.bike_promotions);
     console.log(typeof bikepromotions);
      var bike = new Bikes(
      { 
       company_id: req.body.company_id,
       bikeregistrationno:req.body.bikeregistrationno,
       model_id:req.body.model_id,
       dateofpurchase:req.body.dateofpurchase,
       status:0,
       hire_status:0,
       decline_reason:"",
       approved_by:"",
      });
      bike.save(function (err, bike) {
       if (err)
       {
         return res.status(500).json(err);
       } 
       else
       {
        var lastinserted_id=bike._id;
        Bikepricingmaster.find(function(err,bikepricingmaster){
        
        for (const pricing of bikepricingmaster) {  
        var index = bike_pricing.findIndex(bpricing => bpricing._id == pricing._id);
        var amount=bike_pricing[index].amount;
        var bikepricing = new Bikepricing(
        { 
           bpmid: pricing._id,
           bike_id:lastinserted_id,
           normal_price:amount,
           weekend_price:0,
           delete_status:0,
        });
        bikepricing.save();
        }
        });
        for (const images of bikeimages) {  
          var bikeimage = new Bikeimages(
            { 
              src: images,
              bike_id:lastinserted_id,
              status:0,
            });
        bikeimage.save();
        }
        for (const promotion of bikepromotions) { 
          console.log(promotion)

          var bikepromotion = new Bikepromotion(
            { 
              promotion_id: promotion,
              bike_id:lastinserted_id,
              status:0,
            });
            bikepromotion.save(function (err, pro) {
              if(err)
              {
                console.log("vs");
              }
              else
              {
                console.log(pro._id);
              }
            });
        }
    }
       
     });
     res.send({ status:"success"})
 }
 exports.getallbikepricing = (req, res) => {
  try {
    Bikepricingmaster.find(function(err,Bikepricing){
       if(Object.keys(Bikepricing).length === 0)
       {
         res.send({ status: "no data" });  
       }
       else
       {
         res.send({ status:"success",Bikepricing: Bikepricing });   
       }
       
      })
       
      } catch (e) {
        res.send({ status: "Error in Fetching user" });
      }
};
exports.getallpromotion = (req, res) => {
  try {
    Promotions.find(function(err,promotions){
       if(Object.keys(promotions).length === 0)
       {
         res.send({ status: "no data" });  
       }
       else
       {
         res.send({ status:"success",promotions: promotions });   
       }
       
      })
       
      } catch (e) {
        res.send({ status: "Error in Fetching user" });
      }
};
