const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/mydata',{
    useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(()=>{
    console.log("connection sucessful");
}).catch((e)=>{
    console.log("No connection",e);
})