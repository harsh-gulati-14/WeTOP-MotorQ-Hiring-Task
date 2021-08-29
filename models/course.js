const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    name:{
        type:String,   
        required:true 
    },
    id:{
        type:mongoose.Schema.Types.ObjectId,   
        required:true 
    }
})

const course=mongoose.model('course',courseSchema)
module.exports=course