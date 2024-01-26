const User = require("../models/db.js");


async function getHandlecreate(req , res){
  
    const {name , email , password} = req.body;
    User.create({
        name,
        email,
        password
    });
    return res.render("home")
    

 }





module.exports = getHandlecreate;