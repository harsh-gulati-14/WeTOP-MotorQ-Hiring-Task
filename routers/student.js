const bodyParser = require('body-parser');
const express=require('express')
const router=new express.Router()
const Class = require('../models/class')
const Course = require('../models/course')
const User = require('../models/user')
const Student = require('../models/student')
router.use(express.json())
router.use(bodyParser.urlencoded({
    extended: true
}));
const { checkLoggedIn } = require("../util/auth");

// CHECK REGISTERATION
router.post('/register', (req, res) => {
    const newuser = User({
        name: req.body.rollno,
        password: req.body.name
    })
    console.log(req.body);
    newuser.save((error) => {
        if (!error) {
            res.render('welcome.ejs');
        } else {
            console.log(error);
        }
    });
});
// TIMETABLE
router.post('/timetable', (req, res) => {
    const roll=req.body.rollno;
    var data ;
    Student.find({}, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            var ans;
            data=(docs[2]["classes"]);
            console.log(docs);
            Class.find({ _id: data}, function (err, ind) {
                if (err){
                    console.log(err);
                }
                else{
                    
                    ans=[{rollno:docs[0]["rollno"],name:docs[0]["name"],faculty:ind[0]["faculty"],time:ind[0]["time"],building:ind[0]["building"]}];
                    // console.log(ind);
                    console.log(ans);
                    res.render("display", { details: ans })
                }
            }) 
        }
    })  
    

});
module.exports=router