import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import CreateVM from './components/CreateVM';
import Login from './components/Login';
import RegisterTester from './components/RegisterTester';
import RegisterProvider from './components/RegisterProvider';
import Profile from './components/Profile';


export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/create' component={CreateVM} />
    <Route path='/login' component={Login}/>
    <Route path='/registerTester' component={RegisterTester}/>
    <Route path='/registerProvider' component={RegisterProvider}/>
    <Route path='/profile' component={Profile}/>
  </Route>
);
