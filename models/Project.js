var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var timestamps = require('mongoose-timestamp');

var Project = new mongoose.Schema({
    providerId:Schema.Types.ObjectId,
    providerName:String,
    projectManagerId:Number,
    projectName:String,
    platforms:[String],
    devices:[String],
    browsers:[String],
    testingType:[String],
    numberOfTesters:Number,
    baseHourlyRate:Number,
     duration:{
            dates:{
                startDate:Date,
                endDate:Date
                }
                },
     testers:[
        {
            testerId:Schema.Types.ObjectId,
            testerName:String
        },
        {
           testerId:Schema.Types.ObjectId,
                       testerName:String
        }]

});

Project.plugin(timestamps);

module.exports = mongoose.model('Project', Project);