import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import App from './App';


const createRoutes = () => (
	<Router>
        <App>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </App>
    </Router>
)

export default createRoutes;