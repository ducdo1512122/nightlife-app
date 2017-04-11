var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var event = new Schema({
    eventId: String,
    username: String,
    place: String
});

module.exports = mongoose.model('Event', event);