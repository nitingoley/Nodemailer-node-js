const express = require("express");
const app = express();
const ejs = require("ejs");
const port = process.env.PORT || 900;
const path = require('path');
//  require("./Routers/server.js");
// const model = require('./Routers/server.js')
const model =require("./models/db.js")
// app.get('/', (req, res) => {
//     res.send("This is the home page")
// })


app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, "../public")));
app.set('view engine', "ejs")



app.get('/user/sign', (req, res) => {
    res.render("signup");
})

app.get('/user/login', (req, res) => {
    res.render("login");
})

app.get('/user/home', (req, res) => {
    res.render("home");
})


app.use(express.urlencoded({ extended: false }))





// for signup 

app.post("/user/sign", async (req, res) => {

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


app.post("/user/login", async (req, res) => {

    const {email, password } = req.body;
   
        const data = await model.findOne({email, password})
        if(!data)
         {
         res.render('login' ,{ error : "Invalid username password"})
         }
        console.log(data);
        return res.render('home')

  

})






app.listen(port, () => {
    console.log(`The server running on ${port}`);
})
