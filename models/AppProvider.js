var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var AppProvider = new mongoose.Schema({
    username: String,
    firstName:String,
    lastName:String,
    address:{
    street:String,
    unitNumber:String,
    city:String,
    state:String,
    country:String,
    postalCode:String
    },
    contactNumber: String,
    alternateContactNumber:String,
    creditPoints:Number,
    designation:String,
    yearsOfExperience:Number,
    billingDetails:{
        paypal:{email:String,phoneNumber:String}
    },
    /*activeProjects:[
    {
        projectId:ObjectId,
        projectName:String
    }]
    projects:[{projectId:ObjectId,
                       projectName:String}]*/

});

AppProvider.plugin(timestamps);

module.exports = mongoose.model('AppProvider', AppProvider);