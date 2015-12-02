import React from 'react';
import {Route,Router} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import CreateVM from './components/CreateVM';
import Login from './components/Login';
import RegisterTester from './components/RegisterTester';
import RegisterProvider from './components/RegisterProvider';
import Profile from './components/Profile';
import ProviderDashboard from './components/AppProviderDashboard';
import ManagerDashboard from './components/ManagerDashboard';
import TesterDashboard from './components/TesterDashboard';
import ProviderBilling from './components/ProviderBilling';
import ProviderAppUpload from './components/ProviderAppUpload';
import TesterPayment from './components/TesterPayment';
import ReportBug from './components/ReportBug';


export default (

    <Route component={App}>
        <Route path='/' component={Login}/>
        <Route path='/create' component={CreateVM} />
        <Route path='/registerTester' component={RegisterTester}/>
        <Route path='/registerProvider' component={RegisterProvider}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/providerDashboard' component={ProviderDashboard}/>
        <Route path='/testerDashboard' component={TesterDashboard}/>
        <Route path='/managerDashboard' component={ManagerDashboard}/>
        <Route path='/providerBilling' component={ProviderBilling}/>
        <Route path='/uploadApp' component={ProviderAppUpload}/>
        <Route path='/testerPayment' component={TesterPayment}/>
        <Route path='/reportABug' component={ReportBug}/>
    </Route>

);
