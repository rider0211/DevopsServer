const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config');
// model definition
const ec2Schema = new Schema({
    Region : String,
    Running: Number,
    Stopped: Number,
    createdAt:  Date
});

mongoose.model('Ec2count', ec2Schema, 'ec2count');
