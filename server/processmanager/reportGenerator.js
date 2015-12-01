var BugReport = require('../../models/BugReport');
var Tester = require('../../models/Tester');
var SystemConfig = require('../../models/SystemConfig');
var Payments = require('../../models/Payments');

var generateProjectReport=(req,res,next)=> {
    BugReport.find({projectId: req.param('projectId')}, function (err, bugReports) {
        if (err) {
            console.log('Error fetching Bug reports for project with id' + req.param('projectId'))
            res.status(500).send({message: 'Error searching for a Bug reports'})
        } else {
            var toReturn = buildResponse(bugReports)
            res.status(200).send(toReturn)
        }
    });


    buildResponse(bugReports)
    {
        return {
            projectName: "",
            aggregate: {
                totalBugs: 325,
                approved: 300,
                critical: 45,
                moderate: 150,
                low: 105,
                startDate: "2015-04-25",
                endDate: "2015-10-10",
                distribution: [
                    {
                        type: "Security",
                        totalBugs: 25,
                        approved: 15,
                        critical: 15
                    }, {
                        type: "Functional",
                        totalBugs: 300,
                        approved: 285,
                        critical: 35,
                        moderate: 150,
                        low: 105
                    }
                ],
                builds: [
                    {
                        buildNumber: "1.2%rc2",
                        totalBugs: 150,
                        approved: 180,
                        critical: 30,
                        moderate: 75,
                        low: 75,
                        startDate: "2015-08-11",
                        endDate: "2015-02-25",
                        distribution: [
                            {
                                type: "Security",
                                totalBugs: 15,
                                approved: 12,
                                critical: 12
                            },
                            {
                                type: "Functional",
                                totalBugs: 135,
                                approved: 168,
                                critical: 18,
                                moderate: 75,
                                low: 75

                            }]
                    }
                ]
            }
        }
    }

}

var getLeaderBoard=(req,res,next)=>{
    Tester.find({}).sort({creditPoints:-1},function(err,testers){
        if(err){
            res.status(500).send({message: 'Error searching for Testers'})
        }
        SystemConfig.findOne({scheduledTasks:{$elemMatch:{jobName:"creditCalculator"}}},function(err,sysConfigDoc){
           var calculatedOn = sysConfigDoc.lastSuccessfulRun;

            if(testers.length<1){

                res.status(200).send({
                    calculatedOn:calculatedOn,
                    testers:[]
                })
            }
            res.status(200).send({
                calculatedOn:calculatedOn,
                testers:testers
            });
        });

    })
}

var getPaymentReportForTester=(req,res,next)=>{
    Payments.find({testerId:req.param('testerId')}).sort({generatdeOn:-1}).exec(function(err,payments){
        if(err){
            res.status(500).send({message:"Error fetching "})
        }
        res.status(200).send(payments);
    })
}


exports.generateProjectReport=generateProjectReport
exports.getLeaderBoard=getLeaderBoard
exports.getPaymentReportForTester=getPaymentReportForTester