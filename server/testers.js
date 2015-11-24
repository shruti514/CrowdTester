var Tester = require('../models/tester');


var findAll = (req,res,next) =>{
    Tester.find(function(err,testers){
        console.log("After get all call"+JSON.stringify(testers))
        res.send(testers);
    })
}

var save = (req,res,next) => {
    var tester = new Tester(req.body);

    tester.save(function (err) {
        if (err) {
            console.log('Error saving data.');
            res.status(500).send(err);
        }
        res.send({message: 'Tester saved'});

    })

}

exports.findAll = findAll;
exports.save = save;