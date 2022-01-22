const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config');
// model definition
const costByServiceSchema = new Schema({
    service             : String,
    date                :  Date,
    netAmortizedCost    : Number,
    unBlendedCost       : Number,
});

mongoose.model('ServiceCost', costByServiceSchema, 'servicecost');
