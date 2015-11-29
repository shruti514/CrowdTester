var Project = require('../../models/Project');

var assignProjectManager=(projectId,managerId,callback)=>{

    Project.findById(projectId,function(err,project){
        if(err){
            console.log('Error fetching project with id'+projectId)
            callback(err,null)
        }else{
            callback(null,project);
        }
    })

};
exports.assignProjectManager=assignProjectManager