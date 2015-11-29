
var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var timestamps = require('mongoose-timestamp');

var Project = new mongoose.Schema({
    providerId:Schema.Types.ObjectId,
    providerName:String,
    projectManagerId:Schema.Types.ObjectId,
    projectName:String,
    platforms:[String]
});

Project.plugin(timestamps);

module.exports = mongoose.model('Project', Project);