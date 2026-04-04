const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips 
// Regardless of outcome, response must include HTTP status code
// and JSON message to the requesting client. 
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        // Shows results on console
        console.log(q);

    // Database returned no data
    if (!q) {
        return res.status(404).json(err);
    }
    // Return resulting trip list
    else {
        return res.status(200).json(q);
    }
};


// GET: /trips/:tripCode - lists a single trip 
// Regardless of outcome, response must include HTTP status code
// and JSON message to the requesting client. 
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) // Return a single record
        .exec();

        // Shows results on console
        console.log(q);

    // Database returned no data
    if (!q) {
        return res.status(404).json(err);
    }
    // Return resulting trip list
    else {
        return res.status(200).json(q);
    }
};
module.exports = {
    tripsList,
    tripsFindByCode
};
