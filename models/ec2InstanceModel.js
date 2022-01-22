const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config');
// model definition
const ec2InstanceSchema = new Schema({
    availability_zone   :   String,
    ipv4                :   String,
    iamInstanceProfile  :   String,
    instance_type       :   String,
    keyName             :   String,
    name                :   String,
    region              :   String,
    createdAt           :   Date,
    instanceId          :   String,

});

mongoose.model('Ec2instnace', ec2InstanceSchema, 'ec2instance');
