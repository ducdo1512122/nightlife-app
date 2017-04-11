var Event = require("../models/events");

exports.newEvent = function(req, res) {
    Event.findOne({'eventId': req.body.eventId, 'username': req.body.username}, function(err, event){
        if(err){
            throw err;
        }
        if(event){
            res.json("Added");
        }
        else {
            var newEvent = new Event();
            newEvent.eventId = req.body.eventId;
            newEvent.username = req.body.username;
            newEvent.place = req.body.place;
            newEvent.save(function(err, rs){
                if(err) throw err;
                res.json(rs);
            })
        }
    })
}

exports.checkGoing = function(req, res) {
    Event.find({'username': req.params.username}, {_id:0, __v: 0}, function(err, event) {
        if(err) throw err;
        else {
            res.json(event);
        }
    })
}

exports.deleteGoing = function(req, res) {
    Event.findOne({'username': req.params.username, 'eventId': req.params.id}, function(err, event) {
        if(err) throw err;
        event.remove(function(err) {
            if(err) throw err;
            res.json(event);
        })
    })
}