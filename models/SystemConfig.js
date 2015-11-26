var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var SystemConfig = new mongoose.Schema({
    baseHourlyRate: Number,
    saasFee:Number,
    creditPoints:{
        priority1:Number,
        priority2:Number,
        priority3:Number
    },
     incentives:[{
            level:Number,
            name:String,
            applicablePercentage:Number,
            bonusPercentage:Number
        }],
    scheduledTasks:[
    {
        jobName:String,
        executionNumber:Number,
        lastSuccessfulRun:Date,
        nextScheduledRun:Date
    },
    {
        jobName:String,
        executionNumber:Number,
        lastSuccessfulRun:Date,
        nextScheduledRun:Date
    }]

});

SystemConfig.plugin(timestamps);

module.exports = mongoose.model('SystemConfig', SystemConfig);