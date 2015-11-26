import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createMemoryHistory from 'history/lib/createMemoryHistory'
import routes from './routes';


let history = createMemoryHistory();

ReactDOM.render(<Router >{routes}</Router>, document.getElementById('app'));