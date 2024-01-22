const express = require("express");
const app = express();
const  port = process.env.PORT|| 900;
const mailer  = require('./controller/route');

app.get("/mail" ,  mailer);



app.get('/' , (req , res)=>{
    res.send("This is the home page")
})


app.listen(port, ()=>{
    console.log(`The server running on ${port}`);
})