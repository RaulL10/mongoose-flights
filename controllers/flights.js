const flight = require('../models/flight');
const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    for (let departs in req.body) {
        if (req.body[departs] === '') delete req.body[departs];
    }
    const flight = new Flight(req.body);
    
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    })
}

function index(req, res) {
    flight.find({}, function(err, flights) {

        res.render('flights', {flights})
    })
}
