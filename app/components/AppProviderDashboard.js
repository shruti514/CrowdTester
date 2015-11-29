var React = require('react')
var DropdownButton = require('react-bootstrap').DropdownButton
var MenuItem = require('react-bootstrap').MenuItem
var {Link} = require('react-router');


class AppProviderDashboard extends React.Component {


    render() {
        return (
            <div id="wrapper">


                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="provider_dashboard.html">Crowd Tester</a>
                    </div>

                    <ul className="nav navbar-right top-nav">
                        <li className="dropdown dropdown-toggle">
                            <DropdownButton style={{background:'#1D1F1D'}} title={this.props.user.username} id="bg-vertical-dropdown-1">
                                <MenuItem eventKey="1"><Link to={'/profile'}> <i className="fa fa-fw fa-user"></i> Profile</Link></MenuItem>
                                <li className="divider"></li>
                                <MenuItem eventKey="2"><Link to={'/login'}><i className="fa fa-fw fa-power-off"></i> Log Out</Link></MenuItem>
                            </DropdownButton>
                        </li>
                    </ul>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav side-nav">
                            <li className="active">
                                <a href="#"><i className="fa fa-fw fa-dashboard"></i>&nbsp;Dashboard</a>
                            </li>
                            <li className="active">
                                <a href="provider_billing.html"><i className="fa fa-fw fa-bars"></i>&nbsp;Billing</a>
                            </li>
                            <li className="active">
                                <a href="provider_add_app.html"><i className="fa fa-fw fa-desktop"></i>&nbsp;Add New Application</a>
                            </li>
                        </ul>
                    </div>

                </nav>

                <div id="page-wrapper">

                    <div className="container-fluid">


                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">
                                    Project Statistics
                                </h1>
                            </div>
                        </div>


                        <div className="row">

                            <div className="col-lg-12">

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title"><i className="fa fa-money fa-fw"></i> Status Details</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-hover table-striped">
                                                <thead>
                                                <tr>
                                                    <th>Application Name</th>
                                                    <th>Platform</th>
                                                    <th>Test Type</th>
                                                    <th>Testers Count</th>
                                                    <th>Tested Hours</th>
                                                    <th>Pending Hours</th>
                                                    <th>Reported Bugs</th>
                                                    <th>Status</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>App 1</td>
                                                    <td>Android</td>
                                                    <td>Functional</td>
                                                    <td>12</td>
                                                    <td>96</td>
                                                    <td>24</td>
                                                    <td>5</td>
                                                    <td>In Progress</td>
                                                </tr>
                                                <tr>
                                                    <td>App 2</td>
                                                    <td>iOS</td>
                                                    <td>Usability</td>
                                                    <td>15</td>
                                                    <td>120</td>
                                                    <td>30</td>
                                                    <td>10</td>
                                                    <td>In Progress</td>
                                                </tr>
                                                <tr>
                                                    <td>App 3</td>
                                                    <td>iOS</td>
                                                    <td>Functional</td>
                                                    <td>120</td>
                                                    <td>960</td>
                                                    <td>240</td>
                                                    <td>12</td>
                                                    <td>In Progress</td>
                                                </tr>
                                                <tr>
                                                    <td>App 1</td>
                                                    <td>Android</td>
                                                    <td>Usability</td>
                                                    <td>4</td>
                                                    <td>32</td>
                                                    <td>8</td>
                                                    <td>2</td>
                                                    <td>In Progress</td>
                                                </tr>
                                                <tr>
                                                    <td>App 4</td>
                                                    <td>iOS</td>
                                                    <td>Functional</td>
                                                    <td>20</td>
                                                    <td>160</td>
                                                    <td>0</td>
                                                    <td>5</td>
                                                    <td>Completed</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        );
    }
}

export default AppProviderDashboard;