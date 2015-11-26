var React = require('react')
var RegisterTesterStore = require('../stores/RegisterTesterStore')
var RegisterTesterAction = require('../actions/RegisterTesterActions')
var Login = require('./Login')

class RegisterTester extends React.Component {

    constructor(props){
        super(props)
        this.state = RegisterTesterStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        RegisterTesterStore.listen(this.onChange)
    }

    componentWillUnmount(){
        RegisterTesterStore.unlisten(this.onChange)
    }

    onChange(state){
        this.setState(state)
    }


    handleSubmit(event){
        event.preventDefault();
        var username = this.state.username.trim();
        var password = this.state.password;
        var confirmPassword = this.state.confirmPassword;

        if (username && password && confirmPassword) {
            if((password===confirmPassword)){
                var tester={
                   username:this.state.username,
                   password:this.state.password,
                   firstName:this.state.firstName,
                   lastName:this.state.lastName,
                   avatarUrl:this.state.avatarUrl,
                   confirmPassword:this.state.confirmPassword,
                   emailId:this.state.emailId,
                   contactNumber:this.state.contactNumber,
                   alternateContactNumber:this.state.alternateContactNumber,
                   age:this.state.age,
                   designation:this.state.designation,
                   yearsOfExperience: this.state.yearsOfExperience,
                   tools: this.state.skills.tools,
                   programmingLanguages: this.state.skills.programmingLanguages,
                   testingSkills: this.state.skills.testingSkills,
                   bugReportingTools: this.state.skills.bugReportingTools,
                   startDate: this.state.availability.startDate,
                   endDate: this.state.availability.endDate,
                   startTime: this.state.availability.startTime,
                   endTime: this.state.availability.endTime,
                   notAvailableStartDate: this.state.notAvailable.dateRange.startDate,
                   notAvailableEndDate: this.state.notAvailable.dateRange.endDate,
                   billingEmail: this.state.billingDetails.paypal.email,
                   billingPhone: this.state.billingDetails.paypal.phoneNumber,
                   timeZone:this.state.timeZone,
                   platform:this.state.platform,
                   testingType:this.state.testingType
                }
                RegisterTesterAction.registerTester(tester);
            }else{

                RegisterTesterAction.updateErrorMessage('RegisterTesterAction.updateErrorMessage');
            }
        }else{
            RegisterTesterAction.updateErrorMessage('Username/password missing')

        }
    }

    showError(){
        if(this.state.isError){
            return(
                <div className="alert alert-danger">
                    <strong>Registration failed!</strong> {this.state.errorMessage}
                </div>
            )
        }

    }

    render() {
        if(this.state.isRegistered){
            return(
                <Login {...this.props} redirectionMessage={this.state.successMessage}/>
            )
        }
        return (
            <div className="inner-bg top-content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 text">
                            <h1><strong>Welcome to Crowd Tester</strong></h1>
                            <div className="description">
                                <p>
                                    Register yourself as an Application Tester.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-10 col-sm-offset-1 form-box">
                            <div className="form-top">
                                <div className="form-top-left">
                                    <p><strong>Please provide the following details</strong></p>
                                </div>
                                <div className="form-top-right">
                                    <i className="fa fa-desktop"></i>
                                </div>
                            </div>

                            <div className="form-bottom">
                                <form role="form" action="" method="post" className="login-form" onSubmit={this.handleSubmit.bind(this)}>
                                    <div className="row">
                                        <div className="col-xs-3 col-xs-offset-1 form-group">
                                            <h4 className="pull-right"><strong>Personal Details</strong></h4>
                                        </div>
                                    </div>
                                    {this.showError()}
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">First Name</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-username">First Name</label>
                                                <input type="text" name="form-username" placeholder="First Name..." className="form-username form-control" id="form-userfirstname" onChange={RegisterTesterAction.updateFirstName}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Last Name</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-username">Last Name</label>
                                                <input type="text" name="form-username" placeholder="Last Name..." className="form-username form-control" id="form-userlastname" onChange={RegisterTesterAction.updateLastName}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Avatar URL</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-avatarurl">Avatar URL</label>
                                                <input type="text" name="form-avatarurl" placeholder="Avatar URL..." className="form-avatarurl form-control" id="form-useravatarurl" onChange={RegisterTesterAction.updateAvatarUrl}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Email ID</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-username">email-id</label>
                                                <input type="text" placeholder="Email ID..." className="form-control" id="form-emailid" onChange={RegisterTesterAction.updateEmailId}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Contact Number</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-usercontactno">contact-no</label>
                                                <input type="text" placeholder="Contact Number..." className="form-control" id="form-contact" onChange={RegisterTesterAction.updateContactNumber}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Alternate Contact Number</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-usercontactno">alternate-contact-no</label>
                                                <input type="text" placeholder="Alternate Contact Number..." className="form-control" id="form-contact" onChange={RegisterTesterAction.updateAlternateContactNumber}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Home Address</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-userhomeaddr">home-address</label>
                                                <input type="text" placeholder="Home Address..." className="form-control" id="form-contact" onChange={RegisterTesterAction.updateHomeAddress}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Mailing Address</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-usermailingaddr">mailing-address</label>
                                                <input type="text" placeholder="Mailing Address..." className="form-control" id="form-contact" onChange={RegisterTesterAction.updateMailingAddress}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Age</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-username">age</label>
                                                <input type="text" placeholder="Age..." className="form-control" id="form-testerage" onChange={RegisterTesterAction.updateAge}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Designation</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-designation">designation</label>
                                                <input type="text" placeholder="Designation..." className="form-control" id="form-testerdesignation" onChange={RegisterTesterAction.updateDesignation}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Years of Experience</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-avatarurl">experience</label>
                                                <input type="text" name="form-experience" placeholder="Years of Experience..." className="form-yearsofexperience form-control" id="form-yearsofexperience" onChange={RegisterTesterAction.updateExperience}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-3 col-xs-offset-1 form-group">
                                            <h4 className="pull-right"><strong>Specify Skills</strong></h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Tools</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <select className="selectpicker" onChange={RegisterTesterAction.updateTools}>
                                                    <option>Selendroid</option>
                                                    <option>Calaba.sh</option>
                                                    <option>Robotium</option>
                                                    <option>Appium</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Programming Languages</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <select className="selectpicker" onChange={RegisterTesterAction.updateProgrammingLanguages}>
                                                    <option>Java</option>
                                                    <option>JavaScript</option>
                                                    <option>Scala</option>
                                                    <option>Python</option>
                                                    <option>Swift</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Testing Skills</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <select className="selectpicker" onChange={RegisterTesterAction.updateTestingSkills}>
                                                    <option>Functional</option>
                                                    <option>Usability</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Bug Reporting Tools</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <select className="selectpicker" onChange={RegisterTesterAction.updateBugReportingTools}>
                                                    <option>Bugzilla</option>
                                                    <option>Jira</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Platform</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <select className="selectpicker" multiple="multiple" onChange={RegisterTesterAction.updatePlatformSkills}>
                                                    <option>Android</option>
                                                    <option>iOS</option>
                                                    <option>Windows</option>
                                                    <option>BlackBerry</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Type of Testing</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <select className="selectpicker" multiple="multiple" onChange={RegisterTesterAction.updateTestingTypes}>
                                                    <option>Functional</option>
                                                    <option>Usability</option>
                                                    <option>Behavioral</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-3 col-xs-offset-1 form-group">
                                            <h4 className="pull-right"><strong>Specify Availability</strong></h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Start Date</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-startdate">startdate</label>
                                                <input type="text" placeholder="MM-dd-yyyy" className="form-control" id="form-startdate" onChange={RegisterTesterAction.updateStartDate}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">End Date</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-endtdate">enddate</label>
                                                <input type="text" placeholder="MM-dd-yyyy" className="form-control" id="form-enddate" onChange={RegisterTesterAction.updateEndDate}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Start Time</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-starttime">starttime</label>
                                                <input type="text" placeholder="HH:mm:ss" className="form-control" id="form-starttime" onChange={RegisterTesterAction.updateStartTime}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">End Time</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-endtime">endtime</label>
                                                <input type="text" placeholder="MM-dd-yyyy" className="form-control" id="form-endtime" onChange={RegisterTesterAction.updateEndTime}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-3 col-xs-offset-1 form-group">
                                            <h4 className="pull-right"><strong>Specify Non-Availability</strong></h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Not Available From Date</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-nastartdate">startdate</label>
                                                <input type="text" placeholder="MM-dd-yyyy" className="form-control" id="form-nastartdate" onChange={RegisterTesterAction.updateNotAvailStartDate}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Not Available Till Date</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-naendtdate">enddate</label>
                                                <input type="text" placeholder="MM-dd-yyyy" className="form-control" id="form-naenddate" onChange={RegisterTesterAction.updateNotAvailEndDate}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-3 col-xs-offset-1 form-group">
                                            <h4 className="pull-right"><strong>Billing Details (Paypal)</strong></h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Email-ID</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-billinemail">billing-email</label>
                                                <input type="text" placeholder="Billing Email ID..." className="form-control" id="form-billingemail" onChange={RegisterTesterAction.updateBillingEmail}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Phone Number</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-naendtdate">billing-phone</label>
                                                <input type="text" placeholder="(000)-000-0000" className="form-control" id="form-billingphone" onChange={RegisterTesterAction.updateBillingPhone}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Username</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-username">Username</label>
                                                <input type="text" name="form-username" placeholder="Username..." className="form-username form-control" id="form-username" onChange={RegisterTesterAction.updateUsername}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Password</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-username">password</label>
                                                <input type="text" name="form-username" placeholder="Password..." className="form-password form-control" id="form-password" onChange={RegisterTesterAction.updatePassword}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Confirm Password</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-username">password</label>
                                                <input type="text" name="form-username" placeholder="Password..." className="form-password form-control" id="form-password" onChange={RegisterTesterAction.confirmPassword}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-xs-offset-4 text">
                                            <div className="description">
                                                <button type="button" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Register</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default RegisterTester;
