var React = require('react');
var {Link} = require('react-router');


import ProfileStore from '../stores/ProfileStore';
import ProfileActions from '../actions/ProfileActions';
import Login from './Login';


class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state=ProfileStore.getState();
        this.onChange = this.onChange.bind(this);
    }


    componentDidMount(){
        ProfileStore.listen(this.onChange);
        ProfileActions.getProfile();
    }

    componentWillUnmount() {
        ProfileStore.unlisten(this.onChange);
    }

    onChange(state){
        this.setState(state);
    }


    render() {
        if(this.state.errorStatusCode == 401){
            return (

                <Login/>
            )
        }else {
            return (
                <div id="wrapper">

                    <!-- Navigation -->
                    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="tester_dashboard.html">Crowd Tester</a>
                        </div>
                        <!-- Top Menu Items -->
                        <ul className="nav navbar-right top-nav">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> {this.state.username} <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to={'/profile'}><i className="fa fa-fw fa-user"></i> Profile</Link>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <Link to={'/login'}><i className="fa fa-fw fa-power-off"></i> Log Out</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav side-nav">
                                <ul className="nav navbar-nav side-nav">
                                    <li className="active">
                                        <Link to={'/'}><i className="fa fa-fw fa-dashboard"></i>&nbsp;Dashboard</Link>
                                    </li>
                                    <li className="active">
                                        <Link to={'/payments'}><i className="fa fa-money fa-fw"></i>&nbsp;Payments</Link>
                                    </li>
                                    <li className="active">
                                        <Link to={'/bug'}><i className="fa fa-fw fa-bars"></i>&nbsp;Report Bug</Link>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                        <!-- /.navbar-collapse -->
                    </nav>

                    <div id="page-wrapper">

                        <div className="container-fluid">

                            <!-- Page Heading -->
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1 className="page-header">
                                        Profile
                                    </h1>
                                </div>
                            </div>
                            <!-- /.row -->

                            <div className="row">

                                <div className="col-lg-12">
                                    <!-- -->
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h3 className="panel-title"><i className="fa fa-money fa-fw"></i> User Profile</h3>
                                        </div>
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="col-md-3 col-md-offset-3 text-left"><strong>First Name</strong>
                                                </div>
                                                <div
                                                    className="col-md-3 text-left">{this.state.firstName}</div>
                                                <div className="col-md-3"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 col-md-offset-3 text-left"><strong>Last Name</strong>
                                                </div>
                                                <div
                                                    className="col-md-3 text-left">{this.state.lastName}</div>
                                                <div className="col-md-3"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 col-md-offset-3 text-left"><strong>E-mail ID</strong></div>
                                                <div className="col-md-3 text-left">{this.state.email}</div>
                                                <div className="col-md-3"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 col-md-offset-3 text-left"><strong>Contact Number</strong></div>
                                                <div className="col-md-3 text-left">{this.state.contactNumber}</div>
                                                <div className="col-md-3"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 col-md-offset-3 text-left"><strong>Age</strong></div>
                                                <div className="col-md-3 text-left">{this.state.age}</div>
                                                <div className="col-md-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.row -->

                    </div>
                    <!-- /.container-fluid -->

                </div>

            );
        }
    }
}

export default Profile;
