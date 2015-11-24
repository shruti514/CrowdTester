
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Tester = new mongoose.Schema({
    username: String,
    firstName:String,
    lastName:String,
    avatarUrl:String,
    email: String,
    isActive:Boolean,
    age:Number,
    designation:String,
    yearsOfExperience:Number,
    skills:{
        tools:[String],
        programmingLanguages:[String],
        testingSkills:[String],
        bugReportingTools:[String]
    },
    availability:{
        dates:{
            startDate:Date,
            endDate:Date
        },
        time:{
            startTime:Date,
            endTime:Date
        }
    }

});

Tester.plugin(timestamps);

module.exports = mongoose.model('Tester', Tester);