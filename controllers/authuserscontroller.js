const Authuser = require('../models/authusersmodels.js');
exports.authuserlogin = (req, res) => {
   console.log(req.body);
  try {
      Authuser.findOne({username:req.body.username,password:req.body.password},function(err,authuser){
        if(authuser==null)
        {
          res.send({ status: "failure" });  
        }
        else
        {
          res.send({ status:"success",result: authuser });   
        }
      })
       
      } catch (e) {
        res.send({ status: "Error in Fetching user" });
      }
};