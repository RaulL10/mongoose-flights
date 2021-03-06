const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date,
    }
}, {
    timestamps: true
})


const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true
    }, 
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
        required: true
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        required: true,
        default: function () {
            return new Date()
        }
    },
    destinations:[destinationSchema],
}, {
    timestamps: true
})


module.exports = mongoose.model('flights', flightSchema);

