var React = require('react')
var DropdownButton = require('react-bootstrap').DropdownButton
var MenuItem = require('react-bootstrap').MenuItem
var {Link} = require('react-router');
var AppProviderActions = require('../actions/AppProviderActions');
var AppProviderStore = require('../stores/AppProviderStore');

class ProviderBilling extends React.Component {

    constructor(props){
        super(props);
        this.state = AppProviderStore.getState();
        this.onChange = this.onChange.bind(this);
    }


    componentDidMount(){
        AppProviderStore.listen(this.onChange);

        AppProviderActions.getAppProviderDashboardDetails();
    }

    componentWillUnmount() {
        AppProviderStore.unlisten(this.onChange);
    }

    onChange(state){
        this.setState(state);
    }

    getUsername(){
        if(this.state.providerDetails){
            return this.state.providerDetails.username
        }
        return "";
    }

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
                        <Link className="navbar-brand" to={`providerDashboard`}>Crowd Tester</Link>
                    </div>

                    <ul className="nav navbar-right top-nav">
                        <li className="dropdown dropdown-toggle">
                            <DropdownButton style={{background:'#1D1F1D'}} title={this.getUsername()} id="bg-vertical-dropdown-1">
                                <MenuItem eventKey="1"><Link to={'/profile'}> <i className="fa fa-fw fa-user"></i> Profile</Link></MenuItem>
                                <li className="divider"></li>
                                <MenuItem eventKey="2"><Link to={'/login'}><i className="fa fa-fw fa-power-off"></i> Log Out</Link></MenuItem>
                            </DropdownButton>
                        </li>

                    </ul>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav side-nav">
                            <li className="active">
                                <Link to={`/providerDashboard`}><i className="fa fa-fw fa-dashboard"></i>&nbsp;Dashboard</Link>
                            </li>
                            <li className="active">
                                <Link to={`/providerBilling`}><i className="fa fa-fw fa-bars"></i>&nbsp;Billing</Link>
                            </li>
                            <li className="active">
                                <Link to={`/uploadApp`}><i className="fa fa-fw fa-dashboard"></i>&nbsp;Add New Application</Link>
                            </li>
                        </ul>
                    </div>

                </nav>

                <div id="page-wrapper">

                    <div className="container-fluid">


                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">
                                    Project Billing Statistics
                                </h1>
                            </div>
                        </div>


                        <div className="row">

                            <div className="col-lg-12">

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title"><i className="fa fa-money fa-fw"></i> Billing Status Details</h3>
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
                                                    <th>Amount Pending (in USD)</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>App 1</td>
                                                    <td>Android</td>
                                                    <td>Functional</td>
                                                    <td>12</td>
                                                    <td>96</td>
                                                    <td>500</td>
                                                </tr>
                                                <tr>
                                                    <td>App 2</td>
                                                    <td>iOS</td>
                                                    <td>Usability</td>
                                                    <td>15</td>
                                                    <td>120</td>
                                                    <td>600</td>
                                                </tr>
                                                <tr>
                                                    <td>App 3</td>
                                                    <td>iOS</td>
                                                    <td>Functional</td>
                                                    <td>120</td>
                                                    <td>960</td>
                                                    <td>2400</td>
                                                </tr>
                                                <tr>
                                                    <td>App 1</td>
                                                    <td>Android</td>
                                                    <td>Usability</td>
                                                    <td>4</td>
                                                    <td>32</td>
                                                    <td>200</td>
                                                </tr>
                                                <tr>
                                                    <td>App 4</td>
                                                    <td>iOS</td>
                                                    <td>Functional</td>
                                                    <td>20</td>
                                                    <td>160</td>
                                                    <td>1000</td>
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

export default ProviderBilling;
