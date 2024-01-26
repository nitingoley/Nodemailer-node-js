// const  mongoose  = require("mongoose");

// mongoose.set("strictQuery" , false);

// mongoose.connect('mongodb://127.0.0.1:27017/Auth_user' , (er)=>{
//     if(!er)
//     {
//         console.log("Db is connect !");
//     }
//     else
//     {
//         console.log("DB is not connect " +er);
//     }
// });
 

// const UserSchema = new mongoose.Schema({
//     name:{
//         type: String , 
//         required : true,
//     },
//     email:{
//         type: String , 
//         required : true,
//         unique : true,
//     },
//     password:{
//         type: String , 
//         required : true,
//     } 
// },{
//         timestamps :true
//     }
// );

// const model = new mongoose.model("User-auth" , UserSchema);


// module.exports = model;