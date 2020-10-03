const User = require('../models/usersmodels.js');
const fs = require('fs');
//get all users
exports.getallusers = (req, res) => {
    try {
        User.find(function(err,users){
            if(Object.keys(users).length === 0)
            {
              res.send({ status: "no data" });  
            }
            else
            {
              res.send({ status:"success",users: users });   
            }
            
           })
            
           } catch (e) {
             res.send({ status: "Error in Fetching user" });
           }
};
//create user
exports.createuser = (req, res) => {
  const backimage = req.body.back.replace(/^data:([A-Za-z-+/]+);base64,/, '');
  const backimagepath = './images/'+Date.now()+'back'+'.png'
  fs.writeFileSync(backimagepath, backimage,  {encoding: 'base64'});
  const frontimage = req.body.front.replace(/^data:([A-Za-z-+/]+);base64,/, '');
  const frontimagepath = './images/'+Date.now()+'front'+'.png'
  fs.writeFileSync(frontimagepath, frontimage,  {encoding: 'base64'});
  const profileimage = req.body.profile.replace(/^data:([A-Za-z-+/]+);base64,/, '');
  const profileimagepath = './images/'+Date.now()+'profile'+'.png'
  fs.writeFileSync(profileimagepath, profileimage,  {encoding: 'base64'});
  var user = new User(
    { 
     username:req.body.userdata.username,
     gender:req.body.userdata.gender,
     address:req.body.userdata.address,
     latitude:req.body.userdata.latitude,
     longitude:req.body.userdata.longitude,
     locality:req.body.userdata.locality,
     city_id:req.body.userdata.city_id,
     state_id:req.body.userdata.state_id,
     country_id:req.body.userdata.country_id,
     pincode:req.body.userdata.pincode,
     mobileno:req.body.userdata.mobileno,
     emailid:req.body.userdata.emailid,
     password:req.body.userdata.password,
    }
    );
    user.save(function (err, user) {
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
exports.getuserbyid = (req, res) => {
  var userid=req.query.id;
  console.log(userid);
  try {
    User.find({_id:userid},function(err,user){
      console.log(err);
        if(Object.keys(user).length === 0)
        {
          res.send({ status: "no data" });  
        }
        else
        {
          res.send({ status:"success",user: user});   
        }
        
       })
        
       } catch (e) {
         res.send({ status: "Error in Fetching user" });
       }
  };