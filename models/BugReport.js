
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var BugReport = new mongoose.Schema({
    testingType: String,
    priority:String,
    severity:String,
    assignedTo:String,
    //testerId: ObjectId,
    //managerId: ObjectId,
    //projectId: ObjectId,
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