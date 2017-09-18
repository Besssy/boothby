import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {BrowserRouter as Router, Route, browserHistory} from 'react-router-dom';
// import Home from './Components/Home';
// import Test from './Components/Test';
import createRoutes from './routes.js';

const routes = createRoutes();

ReactDOM.render(
	routes,
   document.getElementById('root'));