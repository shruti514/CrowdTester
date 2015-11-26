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
                   confirmPassword:this.state.confirmPassword,
                   emailId:this.state.emailId,
                   phoneNumber:this.state.phoneNumber,
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
                                                <p className="pull-right">Phone Number</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-username">email-id</label>
                                                <input type="text" placeholder="Phone Number..." className="form-control" id="form-phonenumber" onChange={RegisterTesterAction.updatePhoneNumber}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">Select preferred TimeZone</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <select className="selectpicker" onChange={RegisterTesterAction.updateTimeZone}>
                                                    <option>PST</option>
                                                    <option>CST</option>
                                                    <option>EST</option>
                                                </select>
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
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">To Be Decided</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-username">testers-count</label>
                                                <input type="text" placeholder="Count of Testers..." className="form-control" id="form-tests-count"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <p className="pull-right">To Be Decided</p>
                                            </div>
                                            <div className="col-xs-6 form-group">
                                                <label className="sr-only" for="form-username">testers-hours</label>
                                                <input type="text" placeholder="Number of Hours per Tester..." className="form-control" id="form-tests-hours"/>
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
