const flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
}

function index(req, res) {
    flight.find({}, function(err, flights) {

        res.render('flights', {flights})
    })
}
function newFlight(req, res) {
    res.render('flights/new')
}
