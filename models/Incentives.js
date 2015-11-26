var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Incentives = new mongoose.Schema({
    calculatedOn:Date,
    levels:[{
        level:Number,
        name:String,
        bonus:Number,
        //testers:[ObjectId]
    }],

});

Incentives.plugin(timestamps);

module.exports = mongoose.model('Incentives', Incentives);