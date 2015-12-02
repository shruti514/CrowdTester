var BugsReport = require('../models/BugReport');


var findAll = (req,res,next) =>{
    BugsReport.find(function(err,bugsReport){
       // console.log("After get all call"+JSON.stringify(bugsReport))
        res.send(bugsReport);
    })
}

var save = (req,res,next) => {
    var bugsReport = new BugsReport(req.body);

    bugsReport.save(function (err) {
        if (err) {
            console.log('Error saving data.');
            res.status(500).send(err);
        }
        res.send({message: 'Bug reported successfully!'});

    })

}


exports.findAll = findAll;
exports.save = save;

