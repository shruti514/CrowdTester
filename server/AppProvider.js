var ApplicationProvider = require('../models/AppProvider');


var findAll = (req,res,next) =>{
    ApplicationProvider.find(function(err,appProvider){
        console.log("After get all call"+JSON.stringify(appProvider))
        res.send(appProvider);
    })
}

var save = (req,res,next) => {
    var appProvider = new ApplicationProvider(req.body);

    appProvider.save(function (err) {
        if (err) {
            console.log('Error saving data.');
            res.status(500).send(err);
        }
        res.send({message: 'Application Provider saved'});

    })

}

exports.findAll = findAll;
exports.save = save;

