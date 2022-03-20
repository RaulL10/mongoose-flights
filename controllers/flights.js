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
    // req.body.airline = 
    // req.body.airport = req.body.airport
    // // req.body.flightNo =
    // // req.body.departs =
    
    console.log(req.body)
    console.log(req.body.airline)
    console.log()
    console.log("i am creating")
    const flight = new Flight(req.body)
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