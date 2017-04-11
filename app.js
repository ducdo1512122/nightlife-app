var express = require("express");
var Yelp = require("yelp");

var yelp = new Yelp({
    consumer_key: 'consumer_key',
    consumer_secret: 'consumer_secret',
    token: 'token',
    token_secret: 'token_secret'
})