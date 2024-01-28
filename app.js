const express = require("express");
const app = express();
const ejs = require("ejs");
const port = process.env.PORT || 900;
const path = require('path');
// const model = require("./models/db.js")
const  mongoose  = require("mongoose");
require("dotenv").config();
app.use(express.static('public'));

mongoose.set('strictQuery', false);


const userpass = process.env.MONGODB_PASSWORD;


mongoose.connect(`mongodb+srv://nitingoley1:${userpass}@cluster0.y2wcksp.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    console.log("Database is connected");
}).catch((e)=>{
    console.log(e);
})

 
const UserSchema = new mongoose.Schema({
    name:{
        type: String , 
        required : true,
    },
    email:{
        type: String , 
        required : true,
        unique : true,
    },
    password:{
        type: String , 
        required : true,
    } ,
     
 
});

const PostSchema = new mongoose.Schema({
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






const model = new mongoose.model("User-auth" , UserSchema);
const FeedBack = new mongoose.model("UserFeedBack" , PostSchema);
 


module.exports =  model;
  





app.set("views" , path.join(__dirname , "./views"));
app.set('view engine', "ejs")



app.get('/signup', (req, res) => {
    res.render("signup");
})

app.get('/login', (req, res) => {
    res.render("login");
})

app.get('/home', (req, res) => {
    res.render("home");
})


app.use(express.urlencoded({ extended: false }))


app.get("/" , (req , res)=>{
    res.render("main");
})


// for signup 

app.post("/sign", async (req, res) => {

    const { name, email, password } = req.body;
    try {
        const UserData = new model({
            name, email, password
        });

        const data = await UserData.save();
        console.log(data);
        return res.render("home");

    } catch (error) {
        console.log(error);
    }
})


// for login 


app.post("/login", async (req, res) => {

    const {email, password } = req.body;
   
        const data = await model.findOne({email, password})
        if(!data)
         {
         res.render('login' ,{ error : "Invalid username password"})
         }
        console.log(data);
        return res.render('home')

  

})

    //  code for FeedBack 
     
    app.post("/message" , async (req , res)=>{
         const{name1 , gmail , message} = req.body;
        
         try{
            const UserData = new FeedBack({
                name1 , gmail , message})
         
         const DB_data = await UserData.save();
          console.log(DB_data);
              return res.redirect("home")
        } catch(e)
        {
            res.status(400).send(e);
            console.log(e);
        }

    })







app.get('/contact', (req ,res)=>{
    res.render('contact')
})




app.listen(port, () => {
    console.log(`The server running on ${port}`);
})
