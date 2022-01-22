const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config');
// model definition
const monthlyCostSchema = new Schema({
    year     : Number,
    month    : String,
    cost     : Number,
});

mongoose.model('MonthlyCost', monthlyCostSchema, 'monthlycost');
