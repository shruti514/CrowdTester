var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var timestamps = require('mongoose-timestamp');

var Incentives = new mongoose.Schema({
    calculatedOn:Date,
    levels:[{
        level:Number,
        name:String,
        bonus:Number,
        testers:[Schema.ObjectId]
    }]
});

Incentives.plugin(timestamps);

module.exports = mongoose.model('Incentives', Incentives);