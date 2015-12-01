var Tester = require('../../models/Tester');

var selectTester=(req,res,next)=>{

    Project.findById(req.param('projectId'),function(err,project){
        if(err){
            console.log('Error fetching project with id'+projectId)
            res.status(500).send({message:'Error searching for a project'})
        }else{
            Tester.findOne({'skills.platforms':{$in:project.platforms}},function(err,matchingTesters){
                if(err){
                    res.status(500).send({message:'Error searching for a tester'})
                }
                if(matchingTesters.length < 1 ){
                    res.status(200).send([])
                }else{
                    res.send(matchingTesters)
                }
            })

            callback(null,project);
        }
    })

};



exports.selectTester=selectTester