var PaymentInfo = require('../models/Payments');


var findAll = (req,res,next) =>{
    PaymentInfo.find(function(err,paymentInfo){
        console.log("After get all call"+JSON.stringify(paymentInfo))
        res.send(paymentInfo);
    })
}

var save = (req,res,next) => {
    var paymentInfo = new PaymentInfo(req.body);

    paymentInfo.save(function (err) {
        if (err) {
            console.log('Error saving data.');
            res.status(500).send(err);
        }
        res.send({message: 'Updated payment information'});

    })

}

exports.findAll = findAll;
exports.save = save;

