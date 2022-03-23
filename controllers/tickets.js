const Ticket = require('../models/ticket')
const Flight = require('../models/flight')
const mongoose = require('mongoose');


module.exports = {
    new: newTicket,
    create,
}


function newTicket(req, res) {
    const flight = {id: req.params.id}
    console.log('HEY')
    res.render('tickets/new', {flight})
}


function create(req, res) {
    const ticket = new Ticket(req.body)
    ticket.flight = mongoose.Types.ObjectId(req.params.id)
    ticket.save(function(err, tickets) {
        console.log(tickets)
        res.redirect('/flights/' + req.params.id)

    })
}
