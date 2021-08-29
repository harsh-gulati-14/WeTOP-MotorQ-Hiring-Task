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
// REGISTER
router.post('/register', (req, res) => {
    const newuser = User({
        name: req.body.rollno,
        password: req.body.rollno
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

// LOGIN
router.post('/login', (req, res) => {
    const user = req.body.username;
    const pass = req.body.password;
    console.log(req.body);
    User.findOne({
        name: user
    }, (e, matched) => {
        if (matched.password == pass) {
            res.render('welcome.ejs');
        } else {
            res.render('wrong.ejs')
        }
    });

});
module.exports = router