const bodyParser = require('body-parser');
const express = require('express')
const router = new express.Router()
const Class = require('../models/class')
const Course = require('../models/course')
const User = require('../models/user')
const Student = require('../models/student')
router.use(express.json())
router.use(bodyParser.urlencoded({
    extended: true
}));
const { checkLoggedIn } = require("../util/auth");

/// If the user want's to add a new class to the database
//// ADD CLASS

router.post('/addclass', (req, res) => {
    console.log(req.body);
    const newclass = Class({
        code: req.body.code,
        faculty: req.body.faculty,
        lat: parseInt(req.body.lat),
        long: parseInt(req.body.long),
        building: req.body.building,
        time: req.body.time,
    })
    console.log(req.body);
    newclass.save((error) => {
        if (!error) {
            res.render('addedclass.ejs');
        } else {
            console.log(error);
        }
    });
});

// add a new student to current class
//// ADD STUDENT

router.get('/addstudent/:id', (req, res) => {
    const course=req.params.id;
    const newuser = Student({
        
        name: "HARSH Gulati",
        rollno:"19BCT0210",
        classes:course
    })
    console.log(req.body);
    newuser.save((error) => {
        if (!error) {
            res.render('added.ejs');
        } else {
            console.log(error);
        }
    });
   console.log(course);
});

// fetch the array of courses in console for a given code
// GET ALL COURSES WITH GIVEN _id
router.get('/courses/:id', (req, res) => {
    const course=req.params.id;
    Class.find({code:course}, function (err, allDetails) {
        if (err) {
            console.log(err);
        } else {
            console.log(allDetails);
        }
    })
 });

 // display all the classes with their information 
 // COURSEPAGE

router.get("/getclass", function (req, res) {
    Class.find({}, function (err, allDetails) {
        if (err) {
            console.log(err);
        } else {
            JSON.stringify(allDetails);
            var data=(allDetails[0]["_id"]);
            console.log(data);
            res.render("coursepage", { details: allDetails })
        }
    })
})
module.exports = router