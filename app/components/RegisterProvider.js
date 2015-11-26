var React = require('react')


class RegisterProvider extends React.Component {

    render() {
        return (

                <div className="inner-bg top-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2 text">
                                <h1><strong>Welcome to Crowd Tester</strong></h1>
                                <div className="description">
                                    <p>
                                        Register yourself as an Application Provider.
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
                                    <form role="form" action="" method="post" className="login-form">
                                        <div className="row">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <h4 className="pull-right"><strong>Personal Details</strong></h4>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group">
                                                <div className="col-xs-3 col-xs-offset-1 form-group">
                                                    <p className="pull-right">First Name</p>
                                                </div>
                                                <div className="col-xs-6 form-group">
                                                    <label className="sr-only" for="form-username">First Name</label>
                                                    <input type="text" name="form-username" placeholder="First Name..." className="form-username form-control" id="form-userfirstname"/>
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
                                                    <input type="text" name="form-username" placeholder="Last Name..." className="form-username form-control" id="form-userlastname"/>
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
                                                    <input type="text" name="form-username" placeholder="Username..." className="form-username form-control" id="form-username"/>
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
                                                    <input type="text" name="form-username" placeholder="Password..." className="form-password form-control" id="form-password"/>
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
                                                    <input type="text" name="form-username" placeholder="Password..." className="form-password form-control" id="form-password"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group">
                                                <div className="col-xs-3 col-xs-offset-1 form-group">
                                                    <p className="pull-right">Company</p>
                                                </div>
                                                <div className="col-xs-6 form-group">
                                                    <label className="sr-only" for="form-username">company</label>
                                                    <input type="text" placeholder="Company..." className="form-control" id="form-company"/>
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
                                                    <input type="text" placeholder="Email ID..." className="form-control" id="form-emailid"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group">
                                                <div className="col-xs-3 col-xs-offset-1 form-group">
                                                    <p className="pull-right">Phone Number</p>
                                                </div>
                                                <div className="col-xs-6 form-group">
                                                    <label className="sr-only" for="form-username">phone-number</label>
                                                    <input type="text" placeholder="Phone Number..." className="form-control" id="form-phonenumber"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <h4 className="pull-right"><strong>Specify Package</strong></h4>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group">
                                                <div className="col-xs-3 col-xs-offset-1 form-group">
                                                    <p className="pull-right">Application Name</p>
                                                </div>
                                                <div className="col-xs-6 form-group">
                                                    <label className="sr-only" for="form-appname">application-name</label>
                                                    <input type="text" placeholder="Application Name..." className="form-control" id="form-app-name"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group">
                                                <div className="col-xs-3 col-xs-offset-1 form-group">
                                                    <p className="pull-right">Application Type</p>
                                                </div>
                                                <div className="col-xs-6 form-group">
                                                    <select className="selectpicker">
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
                                                    <select className="selectpicker">
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
                                                    <p className="pull-right">Upload Application File</p>
                                                </div>
                                                <div className="col-xs-6 form-group">
                                                    <label className="sr-only" for="form-username">upload-file</label>
                                                    <input className="file" placeholder="Upload Application File..." type="file" id="form-upload-file"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group">
                                                <div className="col-xs-3 col-xs-offset-1 form-group">
                                                    <p className="pull-right">Number of Testers</p>
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
                                                    <p className="pull-right">Number of Hours per Tester</p>
                                                </div>
                                                <div className="col-xs-6 form-group">
                                                    <label className="sr-only" for="form-username">testers-hours</label>
                                                    <input type="text" placeholder="Number of Hours per Tester..." className="form-control" id="form-tests-hours"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-3 col-xs-offset-1 form-group">
                                                <h4 className="pull-right"><strong>Credit card details</strong></h4>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group">
                                                <div className="col-xs-3 col-xs-offset-1 form-group">
                                                    <p className="pull-right">Credit card number</p>
                                                </div>
                                                <div className="col-xs-6 form-group">
                                                    <label className="sr-only" for="form-username">Credit card number</label>
                                                    <input type="text" placeholder="Credit card number..." className="form-control" id="form-credit-card-no"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group">
                                                <div className="col-xs-3 col-xs-offset-1 form-group">
                                                    <p className="pull-right">Expiration Date (MM/YY)</p>
                                                </div>
                                                <div className="col-xs-3 form-group">
                                                    <label className="sr-only" for="form-username">Expiration Date</label>
                                                    <input type="text" placeholder="MM/YY" className="form-control" id="form-credit-card-expiration"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group">
                                                <div className="col-xs-3 col-xs-offset-1 form-group">
                                                    <p className="pull-right">CVV Code</p>
                                                </div>
                                                <div className="col-xs-3 form-group">
                                                    <label className="sr-only" for="form-username">CVV Code</label>
                                                    <input type="text" placeholder="Enter 3 digit CVV Code..." className="form-control" id="form-credit-card-cvv"/>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-sm-6 col-xs-offset-4 text">
                                                <div className="description">
                                                    <button type="button" className="btn btn-default">Register</button>
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

export default RegisterProvider;
