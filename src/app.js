const express=require("express");
const path=require('path');
const hbs=require("hbs");
const register=require("./models/registers");
const bodyParser = require('body-parser');
const app=express();
require("./db/conn");
const port=process.env.port ||3000;
// const static_path=path.join(__dirname,"../public")
// app.use(express.static(static_path));
const template_path=path.join(__dirname,"../templates/views")
const parital_path=path.join(__dirname,"../templates/partials")
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(parital_path);
app.use(express.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    res.render("index");
})
app.post('/register', async (req, res) => {
    try {
        const firstName = req.body.first;
        const lastName = req.body.last;
        const dob = req.body.dob;
        const gender = req.body.gender;
        const email = req.body.email;
        const phno = req.body.phno;
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;
        console.log(req.body.first); // Corrected from res.body.first
        const newRegistration = new register({
            firstname: firstName,
            lastname: lastName,
            dob: dob,
            gender: gender,
            email: email,
            phno: phno,
            password: password,
            confirmpassword: confirmPassword
        });
        await newRegistration.save();
        res.send('Registration successful');
        // Do something with the form data (e.g., store it in a database)
        // Send a response back to the client
        res.send('Registration successful');
    } catch (error) {
        res.status(400).send(error);
    }
   
  
    // Do something with the form data (e.g., store it in a database)
  
    // Redirect or send a response back to the client
    
  });
app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
});