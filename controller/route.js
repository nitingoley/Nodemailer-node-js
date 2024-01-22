const nodemailer = require("nodemailer");


const mailer = async (req , res)=>{
    res.send("This is the mailer ");


const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port : 587,
    auth:{
        user : 'phyllis.hegmann14@ethereal.email',
        pass : "ePAd1FUhSSC7eWda87",
    }
})
           
//   for MEssage object 

var message = await transporter.sendMail({
    from : "Nitingoley.dev < nitingoley42@gmail.com>" ,
    to : "ayushmate1@gmail.com",
    subject : "This side from Nitin ",
    text: "Hello nice to meet you", 
    html: '<b>Have a great day</b>',
})
 
console.log("The mail send" +message.messageId);
 res.json(message);

}
module.exports = mailer;
