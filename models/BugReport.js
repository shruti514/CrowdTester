
var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var timestamps = require('mongoose-timestamp');

var BugReport = new mongoose.Schema({
    testingType: String,
    priority:String,
    severity:String,
    assignedTo:String,
    testerId: Schema.ObjectId,
    managerId: Schema.ObjectId,
    projectId: Schema.ObjectId,
    environmentDetails:{
        platform:String,
        browser:String,
        device:String,
        operatingSystem:String,
    },
    otherDetails:String


});

BugReport.plugin(timestamps);

module.exports = mongoose.model('BugReport', BugReport);