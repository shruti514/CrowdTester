var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Payment = new mongoose.Schema({
    testerId:Number,
    generatedOn:Date,
    executionNumber:Number,
    paidOn:Date,
    amount:Number,
    projects:Number,
    creditPoints:Number,
    bonus:Number,
    details:[{
            projectName:String,
            projectRates:Number,
            totalbugs:Number,
            accepted:Number,
            critical:Number,
            moderate:Number,
            low:Number
        }],

});

Payment.plugin(timestamps);

module.exports = mongoose.model('Payment', Payment);