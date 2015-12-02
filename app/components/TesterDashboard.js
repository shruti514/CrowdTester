var React = require('react');
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;
var {Link} = require('react-router');
//var TesterActions = require('../actions/TesterDashboardAction');
//var TesterStore = require('../stores/TesterdashboardStore');


class TesterDashboard extends React.Component {

    constructor(props){
        super(props);
       // this.state = TesterStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){

       // TesterStore.listen(this.onChange);
        //TesterActions.getTesterDashBoardData();
        //TesterActions.getProjectData();
        //TesterActions.calculateCreditPoints();
    }

    componentWillUnmount() {
        //TesterStore.unlisten(this.onChange);
    }

    onChange(state){
        console.log('onchange',state);
        this.setState(state);
    }

    renderDashBoard(){


        /*return this.state.projectData.map(function(projects,index){
            return(
                <tr>
                    <td>{projects.environmentDetails.platform}</td>
                    <td>{tester.testingType}</td>
                    <td>{tester.severity}</td>
                </tr>
            );
        });
        return this.state.testerData.map(function(tester,index){
            return(
                <tr>
                    <td>{tester.environmentDetails.platform}</td>
                    <td>{tester.testingType}</td>
                    <td>{tester.severity}</td>
                </tr>
            );
        });*/

        //<td>{this.state.testerData[j].environmentDetails.platform}</td>
        var rows = [];
        for(var i=0; i < this.state.projectData.length; i++)
        {
            for(var j=0; j < this.state.testerData.length; j++) {
                if (this.state.projectData[i].projectID == this.state.testerData[j].projectId) {

                    console.log("match found!");
                    rows.push((<tr>
                        <td>{this.state.projectData[i].providerId}</td>
                        <td>{this.state.projectData[i].providerName}</td>
                        <td>{this.state.testerData[j].testingType}</td>
                        <td>{this.state.testerData[j].severity}</td>
                    </tr>));
                }
            }
        }
        return rows;
    }


    render() {
        var dashBoardData = this.renderDashBoard();
        this.calculateCreditPoints();
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
                                <a href="tester_dashboard.html"><i className="fa fa-fw fa-dashboard"></i>&nbsp;Dashboard</a>
                            </li>
                            <li className="active">
                                <a href="tester_payments.html"><i className="fa fa-money fa-fw"></i>&nbsp;Payments</a>
                            </li>
                            <li className="active">
                                <a href="tester_report_bug.html"><i className="fa fa-fw fa-bars"></i>&nbsp;Report Bug</a>
                            </li>
                        </ul>
                    </div>

                </nav>

                <div id="page-wrapper">

                    <div className="container-fluid">


                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">
                                    Testing Statistics
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

                                                <tr>
                                                    <th>Application ID</th>
                                                    <th>Application Name</th>
                                                    <th>Platform</th>
                                                    <th>Testing Type</th>
                                                    <th>Priority 1 Bugs</th>
                                                    <th>Priority 2 Bugs</th>
                                                    <th>Priority 3 Bugs</th>
                                                </tr>

                                                <tbody>
                                                {dashBoardData}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-xs-4">
                                            <strong>My Testing Activity</strong>
                                        </div>
                                        <div className="col-xs-4 col-xs-offset-2">
                                            <strong>Top Testers</strong>
                                        </div>
                                    </div>
                                    <br></br>
                                        <div className="row">
                                            <div className="table-responsive col-xs-4">
                                                <table className="table table-bordered table-hover table-striped">
                                                    <thead>
                                                    <tr>
                                                        <th>Status</th>
                                                        <th>Bugs Count</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>Raised</td>
                                                        <td>38</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Approved</td>
                                                        <td>20</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Requested Info</td>
                                                        <td>18</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="table-responsive col-xs-4 col-xs-offset-2">
                                                <table className="table table-bordered table-hover table-striped">
                                                    <thead>
                                                    <tr>
                                                        <th>Tester</th>
                                                        <th>Credit Points</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>Ross</td>
                                                        <td>500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Monica</td>
                                                        <td>420</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chandler</td>
                                                        <td>400</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Phoebe</td>
                                                        <td>360</td>
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

export default TesterDashboard;