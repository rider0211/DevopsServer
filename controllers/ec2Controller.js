const mongoose = require('mongoose');
require('../models/ec2Model');
require('../models/ec2InstanceModel');

const Ec2Model = mongoose.model('Ec2count');
const Ec2InstanceModel = mongoose.model('Ec2instnace');
const jwt = require('jwt-simple');
const config = require('../config');

exports.getAllEc2Count = function(req, res, next){
    Ec2Model.find({}, function(err, result){
        if(err){
            return next(err); 
        }else{
            var data = jwt.encode(result, config.secret);
            res.send(data);
        }
    })
}
exports.getAllEc2Instance = function(req, res, next){
    Ec2InstanceModel.find({}, function(err, result){
        if(err){
            return next(err); 
        }else{
            var data = jwt.encode(result, config.secret);
            res.send(data);
        }
    })
}
