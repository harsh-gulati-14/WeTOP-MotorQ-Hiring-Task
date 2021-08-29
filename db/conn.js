const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/motorq',{ // openeing the server
    useNewUrlParser:true
}).then(()=>{
    console.log("Connected Success Mongo");
}).catch((e)=>
{
    console.log(e);
})