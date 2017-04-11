var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var user = new Schema({
   github: {
       id: String,
       displayName: String,
       userName: String,
       publicRepos: Number
   },
   nbrClick: {
       clicks: Number
   }
});

module.exports = mongoose.model('User', user);