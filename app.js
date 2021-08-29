
// HARSH GULATI 19BCT0210
const express = require('express')
require('./db/conn')
const app = express()
const cp = require("cookie-parser");
const session = require("express-session");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000
const studentrouter=require('../api - Copy/routers/student')
const authrouter=require('../api - Copy/routers/auth')
const classrouter=require('../api - Copy/routers/classes')
app.use(studentrouter)
app.use(classrouter)
app.use(authrouter)
app.use(express.json())
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Initialize Express-session
app.get('/', (req, res) => {
    res.render('home.ejs');
});
//// REGISTER
app.get('/register', (req, res) => {
    res.render('signup.ejs');
});
//// LOGIN
app.get('/login', (req, res) => {
    res.render('login.ejs');
});
//// ADD CLASS
app.get('/addclass', (req, res) => {
    res.render('addclass.ejs');
});
//// TIME TABLE
app.get('/timetable', (req, res) => {
    res.render('studentinfo.ejs');
});
// MAP WITH DESTINATION
app.get('/map/:id', (req, res) => {
    const input=req.params.id;
    console.log(input);
    res.render('map.ejs');
});
// MAP FOR NAV
app.get('/map', (req, res) => {
    res.render('map.ejs');
});
app.listen(port, () => {

    console.log('SERVER IS UP')
})