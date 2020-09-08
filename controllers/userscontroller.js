const User = require('../models/usersmodels.js');
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