const mongoose = require('mongoose');
const classSchema = new mongoose.Schema({
    code:{
        type:String,   
        required:true 
    },
    faculty:{
        type:String,   
        required:true 
    },
    building:{
        type:String,   
        required:true 
    },
    lat:{
        type:Number,   
        required:true 
    },
    long:{
        type:Number,   
        required:true 
    },
    time:{
        type:String,   
        required:true 
    }
})
const classes=mongoose.model('class',classSchema)
module.exports=classes