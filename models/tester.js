
var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
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
    contactNumber:String,
    alternateContactNumber:String,
    skills:{
        tools:[String],
        programmingLanguages:[String],
        testingSkills:[String],
        bugReportingTools:[String],
        platforms:[String]
    },
    availability:{
        dates:{
            startDate:Date,
            endDate:Date
        },
        time:{
            startTime:String,
            endTime:String
        }
    },
    notAvailability:{
        dates:{
            startDate:Date,
            endDate:Date
        }
    },
    activeProjects:[{
        projectId:Schema.Types.ObjectId,
        projectName:String
    }],
    projects:[{
        projectId:Schema.Types.ObjectId,
        projectName:String
    }],
    creditPoints:Number,
    billingDetails:{
        email:String,
        contactNumber:String,
    },
    timeZone:String

});

Tester.plugin(timestamps);

module.exports = mongoose.model('Tester', Tester);