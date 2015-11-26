var SystemConf = require('../models/SystemConfig');


var findAll = (req,res,next) =>{
    SystemConf.find(function(err,sysConf){
        console.log("After get all call"+JSON.stringify(sysConf))
        res.send(sysConf);
    })
}

var save = (req,res,next) => {
    var sysConf = new SystemConf(req.body);

    sysConf.save(function (err) {
        if (err) {
            console.log('Error saving data.');
            res.status(500).send(err);
        }
        res.send({message: 'System configuration saved'});

    })

}

exports.findAll = findAll;
exports.save = save;

