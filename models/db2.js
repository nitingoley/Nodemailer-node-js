 let mongoose = require("mongoose");

 mongoose.set('strictQuery' , true);


 mongoose.connect("mongodb://127.0.0.1:27017/FeedBack_db", (er)=>{
    if(er)
    {
        console.log("DB 2nd not connect");
    }
    else
    {
        console.log("DB is connected");
    }
 })


 const SchemaUser = new mongoose.Schema({
  
    name1: {
        type: String , 
        required: true,
    },
    gmail : {
        type :String, 
        required: true
    },
    message : {
        type :String ,
        required: true,
    }
});


const UserModel = new mongoose.model("UserfeedBack" , SchemaUser);

module.exports = UserModel;