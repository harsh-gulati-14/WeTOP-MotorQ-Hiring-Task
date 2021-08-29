const mongoose = require('mongoose');
const studentSchema  = new mongoose.Schema({
    rollno:{
        type:String,
        required:true
    },
    name:{
        type:String,   
        required:true 
    },
    classes:{
        type: String,
		ref: "class"
    }

})
const student=mongoose.model('student',studentSchema )
module.exports=student