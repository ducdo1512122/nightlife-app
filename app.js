var express = require("express");
var Yelp = require("yelp");
var app = express();
var mongoose = require("mongoose");
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
var route = require("./app/routes/index.js")

mongoose.connect(process.env.MONGO_URI);

var yelp = new Yelp({
    consumer_key: 'consumer_key',
    consumer_secret: 'consumer_secret',
    token: 'token',
    token_secret: 'token_secret'
});

app.use('/', express.static(process.cwd() + '/public'));
app.use('/jquery', express.static(process.cwd() + 'app/bower_components/jquery'));
app.use('/angular', express.static(process.cwd() + 'app/bower_components/angular'));
app.use('/bootstrap', express.static(process.cwd() + 'app/bower_components/bootstrap'));
app.use('/font-awesome', express.static(process.cwd() + 'app/bower_components/font-awesome'));

app.use(session({
    secret: 'secretNightLife',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.intialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(8080, function(){
    console.log("Listening ...");
})