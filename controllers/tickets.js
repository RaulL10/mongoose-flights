const Ticket = require('../models/ticket')
const Flight = require('../models/flight')


module.exports = {
    new: newTicket,
}


function newTicket(req, res) {
    Ticket.find({}, function(err, flight) {
        console.log('HEY')
        res.render('tickets/new', {
            flight
        })
    })
}