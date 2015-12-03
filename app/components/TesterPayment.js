var React = require('react')
var DropdownButton = require('react-bootstrap').DropdownButton
var MenuItem = require('react-bootstrap').MenuItem
var {Link} = require('react-router');



class TesterPayment extends React.Component {
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
                        <a className="navbar-brand" href="tester_dashboard.html">Crowd Tester</a>
                    </div>

                    <ul className="nav navbar-right top-nav">
                        <li className="dropdown dropdown-toggle">
                            <DropdownButton style={{background:'#1D1F1D'}} title="alice_baxtor" id="bg-vertical-dropdown-1">
                                <MenuItem eventKey="1"><Link to={'/profile'}> <i className="fa fa-fw fa-user"></i> Profile</Link></MenuItem>
                                <li className="divider"></li>
                                <MenuItem eventKey="2"><Link to={'/login'}><i className="fa fa-fw fa-power-off"></i> Log Out</Link></MenuItem>
                            </DropdownButton>
                        </li>
                    </ul>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav side-nav">
                            <li className="active">
                                <Link to={'/testerDashboard'}><i className="fa fa-fw fa-dashboard"></i>&nbsp;Dashboard</Link>
                            </li>
                            <li className="active">
                                <Link to={'/testerPayment'}><i className="fa fa-money fa-fw"></i>&nbsp;Payments</Link>
                            </li>
                            <li className="active">
                                <Link to={'/reportABug'}><i className="fa fa-fw fa-bars"></i>&nbsp;Report Bug</Link>
                            </li>
                        </ul>
                    </div>


                </nav>

                <div id="page-wrapper">

                    <div className="container-fluid">


                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">
                                    Payments
                                </h1>
                            </div>
                        </div>


                        <div className="row">

                            <div className="col-lg-12">

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title"><i className="fa fa-money fa-fw"></i> Payment Details</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-hover table-striped">
                                                <thead>
                                                <tr>
                                                    <th>Application ID</th>
                                                    <th>Application Name</th>
                                                    <th>Test Type</th>
                                                    <th>Tested Hours</th>
                                                    <th>Payment</th>
                                                    <th>Credit Points</th>
                                                    <th>Incentive</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>100</td>
                                                    <td>App 1</td>
                                                    <td>Functional</td>
                                                    <td>40</td>
                                                    <td>320</td>
                                                    <td>400</td>
                                                    <td>40</td>
                                                </tr>
                                                <tr>
                                                    <td>101</td>
                                                    <td>App 2</td>
                                                    <td>Usability</td>
                                                    <td>20</td>
                                                    <td>160</td>
                                                    <td>200</td>
                                                    <td>20</td>
                                                </tr>
                                                <tr>
                                                    <td>102</td>
                                                    <td>App 3</td>
                                                    <td>Usability</td>
                                                    <td>30</td>
                                                    <td>240</td>
                                                    <td>300</td>
                                                    <td>30</td>
                                                </tr>
                                                <tr>
                                                    <td>103</td>
                                                    <td>App 3</td>
                                                    <td>Functional</td>
                                                    <td>40</td>
                                                    <td>320</td>
                                                    <td>400</td>
                                                    <td>40</td>
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

export default TesterPayment;
