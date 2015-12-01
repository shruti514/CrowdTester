/**
 * Created by shruteegangras on 11/30/15.
 */

var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var timestamps = require('mongoose-timestamp');

var Bill = new mongoose.Schema({
    providerId:Schema.ObjectId,
    totalCost:Number
});

Bill.plugin(timestamps);

module.exports = mongoose.model('Bill', Bill);