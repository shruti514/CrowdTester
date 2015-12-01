var SystemConfig = require('../../models/SystemConfig')
var Tester = require('../../models/Tester')
var Incentives = require('../../models/Incentives')
var async = require('async')
var BugReport = require('../../models/BugReport')
var _ = require('underscore')
var Payments = require('../../models/Payments')

var paymentsCalculator = (req, res, next)=> {
    SystemConfig.findOne({}).sort({'incentives': 1}).exec(function (err, sysConfigDoc) {

        var startIndex = 0;
        Tester.find({isActive: true}).sort({creditPoints: -1}).exec(function (err, testers) {
            var levels = sysConfigDoc.incentives.map(function (incentive, index) {

                var applicableToTesters = ((incentive.applicablePercentage / 100) * testers.length)
                var testersForThisCategory = testers.slice(startIndex, startIndex + (applicableToTesters - 1))
                startIndex = startIndex + (applicableToTesters - 1);

                var testerIds = testersForThisCategory.map((tester, index)=> {
                    return tester.id;
                });

                return {
                    level: incentive.level,
                    name: incentive.name,
                    bonus: incentive.bonusPercentage,
                    testers: testerIds
                };

            })
            Incentives.save({calculatedOn: new Date(), levels: levels}, function () {
                testers.forEach(function (tester, index) {
                    var totalPayout = 0;

                    var parallelTasks = tester.activeProjects.map(function (projectId, index) {
                        return function (callback) {
                            Project.findById({id: projectId}, function (err, projectDoc) {
                                return callback(err, projectDoc)
                            })
                        }
                    })
                    async.parallel(parallelTasks, function (err, results) {
                        var parallelTask2 = results.map(function (projectDoc, index) {
                            return function (callback) {
                                BugReport.find({
                                    projectId: projectDoc.id,
                                    testerId: tester.id
                                }, function (err, bugReports) {
                                    return callback(err, {project: projectDoc, bugReports: bugReports})
                                })
                            }
                        })
                        async.parallel(parallelTask2, function (err, results) {
                            var projDetails = results.map(function (eachProjDetails, index) {
                                return eachProjDetails.bugReports.bug.map(function (bugReport, index) {
                                    var hourlyRate = eachProjDetails.project.baseHourlyRate ? eachProjDetails.project.baseHourlyRate : sysConfigDoc.baseHourlyRate;
                                    totalPayout = totalPayout + getAmountForTestingType(bugReport.project.bugRates, bugReport.bugReport.testingType, bugReport.bugReport.priority)
                                    return {
                                        projectName: bugReport.project.projectName,
                                        projectRates: bugReport.project.bugRates
                                    }
                                })
                            })

                            var bonusLevelApplied = 0;
                            levels.forEach(function (level, index) {
                                if (_.contains(level.testers, tester.id)) {
                                    bonusLevelApplied = level.level
                                    totalPayout = totalPayout + ((level.bonus / 100) * totalPayout)
                                }
                            });

                            var payments = new Payments({
                                testerId: tester.id,
                                generatedOn: new Date(),
                                executionNumber: 1,
                                paidOn: null,
                                amount: totalPayout,
                                projects: tester.activeProjects.length,
                                creditPoints: tester.creditPoints,
                                bonus: bonusLevelApplied,
                                details: projDetails,
                            })

                            payments.save(function () {
                                res.send("Payments calculated")
                            })
                        })

                    });
                })
            })


        })


    })

}


var billGenerator = (req, res, next)=> {
    SystemConfig.findOne().exec(function (err, sysDoc) {
        Project.find({isActive: true}, function (err, projects) {

            var parallelTAsks = projects.map(function (project, index) {
                return function (callback) {
                    BugReport.find({projectId: project.id}, function (err, bugReports) {
                        callback(err, {project: project, bugReports: bugReports})
                    })
                }
            })

            async(parallelTAsks, function (err, results) {
                var map={}
                results.forEach(function (projDetails, index) {
                    var bugsCount = {
                        security: {
                            priority1: 0,
                            priority2: 0,
                            priority3: 0,
                        },
                        functional: {
                            priority1: 0,
                            priority2: 0,
                            priority3: 0,
                        },
                        usability: {
                            priority1: 0,
                            priority2: 0,
                            priority3: 0,
                        }
                    };

                    projDetails.bugReports.forEach(function (bugReport, index) {
                        if ("functional" == bugReport.testingType) {
                            if (1 == bugReport.priority) {
                                bugsCount.functional.priority1 = bugsCount.functional.priority1 + 1
                            }
                            if (2 == bugReport.priority) {
                                bugsCount.functional.priority2 = bugsCount.functional.priority2 + 1
                            }
                            if (3 == bugReport.priority) {
                                bugsCount.functional.priority3 = bugsCount.functional.priority3 + 1
                            }
                        }
                        if ("security" == testingType) {
                            if (1 == bugReport.priority) {
                                bugsCount.security.priority1 = bugsCount.security.priority1 + 1
                            }
                            if (2 == bugReport.priority) {
                                bugsCount.security.priority2 = bugsCount.security.priority2 + 1
                            }
                            if (3 == bugReport.priority) {
                                bugsCount.security.priority3 = bugsCount.security.priority3 + 1
                            }
                        }
                        if ("usability" == testingType) {
                            if (1 == bugReport.priority) {
                                bugsCount.usability.priority1 = bugsCount.usability.priority1 + 1
                            }
                            if (2 == bugReport.priority) {
                                bugsCount.usability.priority2 = bugsCount.usability.priority2 + 1
                            }
                            if (3 == bugReport.priority) {
                                bugsCount.usability.priority3 = bugsCount.usability.priority3 + 1
                            }
                        }
                    })
                    var securityBugsCost = 0;
                    securityBugsCost = securityBugsCost + bugsCount.security.priority1 * getAmountForTestingType(projDetails.project.bugRates, "security", 1)
                    securityBugsCost = securityBugsCost + bugsCount.security.priority2 * getAmountForTestingType(projDetails.project.bugRates, "security", 2)
                    securityBugsCost = securityBugsCost + bugsCount.security.priority3 * getAmountForTestingType(projDetails.project.bugRates, "security", 3)

                    var functionalBugsCost = 0;
                    functionalBugsCost = functionalBugsCost + bugsCount.functional.priority1 * getAmountForTestingType(projDetails.project.bugRates, "functional", 1)
                    functionalBugsCost = functionalBugsCost + bugsCount.functional.priority2 * getAmountForTestingType(projDetails.project.bugRates, "functional", 2)
                    functionalBugsCost = functionalBugsCost + bugsCount.functional.priority3 * getAmountForTestingType(projDetails.project.bugRates, "functional", 3)

                    var usabilityBugsCost = 0;
                    usabilityBugsCost = usabilityBugsCost + bugsCount.usability.priority1 * getAmountForTestingType(projDetails.project.bugRates, "usability", 1)
                    usabilityBugsCost = usabilityBugsCost + bugsCount.usability.priority2 * getAmountForTestingType(projDetails.project.bugRates, "usability", 2)
                    usabilityBugsCost = usabilityBugsCost + bugsCount.usability.priority3 * getAmountForTestingType(projDetails.project.bugRates, "usability", 3)

                    var total= securityBugsCost + functionalBugsCost + usabilityBugsCost;

                    var costToProvider = map[projDetails.project.providerId]
                    if(costToProvider){
                        map[projDetails.project.providerId]=costToProvider+total;
                    }else{
                        map[projDetails.project.providerId]=total;
                    }

                })

                var parallelBillingTask=[]
                for (var property in map) {
                    if (map.hasOwnProperty(property)) {
                        parallelBillingTask.push(function(callback){
                            var bill = new Bill({
                               providerId:property,
                               totalCost:map[property]

                            })

                            bill.save(function(){
                                res.send({message:'payments Saved'})
                            })
                        })
                    }
                }

            })


        })
    })

}

var getAmountForTestingType = (rates, testingType, priority)=> {
    if ("functional" == testingType) {
        rates.functional.forEach(function (prirotyObj, index) {
            if (priority == prirotyObj.priority) {
                return prirotyObj.amount;
            }
        })
    }
    if ("security" == testingType) {
        rates.security.forEach(function (prirotyObj, index) {
            if (priority == prirotyObj.priority) {
                return prirotyObj.amount;
            }
        })
    }
    if ("usability" == testingType) {
        rates.usability.forEach(function (prirotyObj, index) {
            if (priority == prirotyObj.priority) {
                return prirotyObj.amount;
            }
        })
    }
}


exports.paymentsCalculator = paymentsCalculator
exports.billGenerator = billGenerator
