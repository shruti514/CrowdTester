var IncentivesList = require('../models/Incentives');


var findAll = (req,res,next) =>{
    IncentivesList.find(function(err,incentives){
        console.log("After get all call"+JSON.stringify(incentives))
        res.send(incentives);
    })
}

var save = (req,res,next) => {
    var incentives = new IncentivesList(req.body);

    incentives.save(function (err) {
        if (err) {
            console.log('Error saving data.');
            res.status(500).send(err);
        }
        res.send({message: 'Incentives information saved'});

    })

}

exports.findAll = findAll;
exports.save = save;

