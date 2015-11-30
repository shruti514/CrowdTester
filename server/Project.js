var Project = require('../models/Project');


var findAll = (req,res,next) =>{
    Project.find(function(err,project){
        console.log("After get all call"+JSON.stringify(project))
        res.send(project);
    })
}

var save = (req,res,next) => {
    var project = new Project(req.body);

    project.save(function (err) {
        if (err) {
            console.log('Error saving data.');
            res.status(500).send(err);
        }
        res.send({message: 'Project saved'});

    })

}

exports.findAll = findAll;
exports.save = save;

