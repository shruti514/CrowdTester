var React = require('react')
var DropdownButton = require('react-bootstrap').DropdownButton
var MenuItem = require('react-bootstrap').MenuItem
var {Link} = require('react-router');



class ReportBug extends React.Component {
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
                        <Link to={'/testerDashboard'} className="navbar-brand">Crowd Tester</Link>
                    </div>

                    <ul className="nav navbar-right top-nav">
                        <li className="dropdown dropdown-toggle">
                            <DropdownButton style={{background:'#1D1F1D'}} title="tester123" id="bg-vertical-dropdown-1">
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
                                    Report Bug
                                </h1>
                            </div>
                        </div>


                        <div className="row">

                            <div className="col-lg-12">

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title"><i className="fa fa-money fa-fw"></i> Bug Details</h3>
                                    </div>
                                    <div className="panel-body">
                                        <form role="form" action="" method="post">
                                            <div className="row">
                                                <div className="form-group">
                                                    <div className="col-xs-3 col-xs-offset-1 form-group">
                                                        <p className="pull-right">Application Name</p>
                                                    </div>
                                                    <div className="col-xs-5 form-group">
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
                                                        <p className="pull-right">Bug Type</p>
                                                    </div>
                                                    <div className="col-xs-6 form-group">
                                                        <select className="selectpicker">
                                                            <option>Sev 1</option>
                                                            <option>Sev 2</option>
                                                            <option>Sev 3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group">
                                                    <div className="col-xs-3 col-xs-offset-1 form-group">
                                                        <p className="pull-right">Description</p>
                                                    </div>
                                                    <div className="col-xs-6 form-group">
                                                        <label className="sr-only" for="form-username">bug-description</label>
                                                <textarea className="form-group col-xs-6" placeholder="Describe Bug..." id="form-bug-desc">
                                                </textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group">
                                                    <div className="col-xs-3 col-xs-offset-1 form-group">
                                                        <p className="pull-right">Steps to Reproduce</p>
                                                    </div>
                                                    <div className="col-xs-6 form-group">
                                                        <label className="sr-only" for="form-username">bug-steps</label>
                                                <textarea className="form-group col-xs-6" placeholder="Bug Steps..." id="form-bug-steps">
                                                </textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 col-xs-offset-4 text">
                                                    <div className="description">
                                                        <button type="button" className="btn btn-primary">Create</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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

export default ReportBug;
