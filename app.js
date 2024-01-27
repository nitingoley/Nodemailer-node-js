const express = require("express");
const app = express();
const ejs = require("ejs");
const port = process.env.PORT || 900;
const path = require('path');
const model = require("./models/db.js")

 
app.use(express.static('public'));
 



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
         const{name , email} = req.body;
        
         try{
            const UserData = new model({
                name , email})
         
         const DB_data = await UserData.save();
          console.log(DB_data);
              res.send('FeedBack is Send to team');   
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
