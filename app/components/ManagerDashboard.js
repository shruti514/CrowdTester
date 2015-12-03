var React = require('react')
var DropdownButton = require('react-bootstrap').DropdownButton
var MenuItem = require('react-bootstrap').MenuItem
var {Link} = require('react-router');

class ManagerDashboard extends React.Component {
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
                        <a className="navbar-brand" href="manager_dashboard.html">Crowd Tester</a>
                    </div>

                    <ul className="nav navbar-right top-nav">
                        <li className="dropdown dropdown-toggle">
                            <DropdownButton style={{background:'#1D1F1D'}} title={this.props.user?this.props.user.username:"alice_baxtor"} id="bg-vertical-dropdown-1">
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
                                <a href="#"><i className="fa fa-fw fa-bars"></i>&nbsp;Project Setup</a>
                            </li>
                        </ul>
                    </div>

                </nav>

                <div id="page-wrapper">

                    <div className="container-fluid">


                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">
                                    Test Cycles
                                </h1>
                            </div>
                        </div>


                        <div className="row">

                            <div className="col-lg-12">

                                <div className="row">
                                    <div className="col-xs-10 col-xs-offset-2">
                                        <div className="col-xs-3 col-xs-offset-1 form-group">
                                            <p className="pull-right">Select Test Cycle Status</p>
                                        </div>
                                        <select className="selectpicker">
                                            <option selected="true">Select Test Cycle Status</option>
                                            <option>Active</option>
                                            <option>Locked</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title"><i className="fa fa-money fa-fw"></i> Testing Statistics</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-hover table-striped">
                                                <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Test cycle</th>
                                                    <th>Testing Type</th>
                                                    <th>Product Name</th>
                                                    <th>Status</th>
                                                    <th>End Date</th>
                                                    <th>Created Date</th>
                                                    <th>Testers</th>
                                                    <th>Pending</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>100</td>
                                                    <td>cycle1</td>
                                                    <td>Functional</td>
                                                    <td>App 1</td>
                                                    <td>Active</td>
                                                    <td>10/12/2015</td>
                                                    <td>09/12/2015</td>
                                                    <td>12</td>
                                                    <td>5</td>
                                                </tr>
                                                <tr>
                                                    <td>101</td>
                                                    <td>cycle2</td>
                                                    <td>Functional</td>
                                                    <td>App 2</td>
                                                    <td>Active</td>
                                                    <td>10/12/2015</td>
                                                    <td>09/12/2015</td>
                                                    <td>12</td>
                                                    <td>8</td>
                                                </tr>
                                                <tr>
                                                    <td>102</td>
                                                    <td>cycle3</td>
                                                    <td>Functional</td>
                                                    <td>App 3</td>
                                                    <td>Locked</td>
                                                    <td>10/12/2015</td>
                                                    <td>09/12/2015</td>
                                                    <td>12</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr>
                                                    <td>103</td>
                                                    <td>cycle1</td>
                                                    <td>Functional</td>
                                                    <td>App 4</td>
                                                    <td>Active</td>
                                                    <td>10/12/2015</td>
                                                    <td>09/12/2015</td>
                                                    <td>12</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>104</td>
                                                    <td>cycle3</td>
                                                    <td>Usability</td>
                                                    <td>App 5</td>
                                                    <td>Locked</td>
                                                    <td>10/12/2015</td>
                                                    <td>09/12/2015</td>
                                                    <td>12</td>
                                                    <td>4</td>
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

export default ManagerDashboard;