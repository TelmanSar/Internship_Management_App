import React from 'react'
import createBrowserHistory from 'history/createBrowserHistory'
import LoginPage from '../components/LoginPage'
import { Router, Route, Switch, } from 'react-router'

export const history = createBrowserHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
            </Switch>
        </div>
    </Router>
);

 export default AppRouter