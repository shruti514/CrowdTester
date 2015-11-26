var React = require('react');
var LoginStore = require('../stores/LoginStore');
var LoginAction = require('../actions/LoginActions');
var Home = require('./Home');
var {Link} = require('react-router');

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = LoginStore.getState();
        this.onChange = this.onChange.bind(this);
    }


    componentDidMount(){
        LoginStore.listen(this.onChange);
    }

    componentWillUnmount() {
        LoginStore.unlisten(this.onChange);
    }

    onChange(state){
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();

        var username = this.state.username.trim();
        var password = this.state.password;

        if (username && password) {
            LoginAction.postLogin(username, password);
        }
    }

    showError(){
        if(this.state.isError){
            return (
            <div className="alert alert-danger">
                <strong>Failed!</strong> {this.state.errorMessage}
            </div>
            );
        }
    }

    showRedirectionMessage(){
        if(this.props.redirectionMessage){
            return(
                <div className="alert alert-info">
                    <strong>Please Login!</strong> {this.props.redirectionMessage}
                </div>
            )
        }
    }


    render() {

        if(this.state.isAuthenticated) {
            return (
                <Home {...this.props} user={this.state.user}/>
            );
        }
        else{
        return (

                <div className="inner-bg top-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2 text">
                                <h1><strong>Welcome to Crowd Tester</strong></h1>
                                <div className="description">
                                    <p>
                                        Your gateway to crowd testing.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3 form-box">
                                <div className="form-top">
                                    <div className="form-top-left">
                                        <h3>Login to our site</h3>
                                        <p>Enter your username and password to log on:</p>
                                        {this.showError()}
                                        {this.showRedirectionMessage()}
                                    </div>
                                    <div className="form-top-right">
                                        <i className="fa fa-key"></i>
                                    </div>
                                </div>
                                <div className="form-bottom">
                                    <form role="form" action="" method="post" className="login-form" onSubmit={this.handleSubmit.bind(this)}>
                                        <div className="form-group">
                                            <label className="sr-only" for="form-username">Username</label>
                                            <input type="text" name="form-username" placeholder="Username..." className="form-username form-control" id="form-username" onChange={LoginAction.updateUsername}/>
                                        </div>
                                        <div className="form-group">
                                            <label className="sr-only" for="form-password">Password</label>
                                            <input type="password" name="form-password" placeholder="Password..." className="form-password form-control" id="form-password" onChange={LoginAction.updatePassword}/>
                                        </div>
                                        <button type="submit" className="btn">Sign in!</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <br></br>
                            <div className="row">
                                <div className="col-sm-4 col-sm-offset-2 text">
                                    <p><strong>If you are an impeccable tester, show us your skills and get paid</strong></p>
                                    <div className="description">
                                        <Link className="btn btn-primary" to={"/registerTester"}>Register</Link>

                                    </div>
                                </div>
                                <div className="col-sm-4 text">
                                    <p><strong>Want to test your mobile application, register as an application provider and upload your App</strong></p>
                                    <div className="description">
                                        <Link className="btn btn-primary" to={"/registerProvider"}>Register</Link>
                                    </div>
                                </div>''
                            </div>
                    </div>
                </div>

            );
        }
    }
}


export default Login;