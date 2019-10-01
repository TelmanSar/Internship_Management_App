import React from 'react'
import { createBrowserHistory } from 'history'
import LoginPage from '../components/LoginPage'
import HomePage from '../components/HomePage'
import UsersEditPage from '../components/UsersEditPage'
import TopicDashboardExpensePage from '../components/TopicDashboardExpensePage'
import UsersTable from "../components/UsersTable";
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { Router, Switch } from 'react-router-dom'

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/home" component={HomePage}/>
                <PrivateRoute path="/users" component={UsersTable} />
                <PrivateRoute path="/edit_user/:id" component={UsersEditPage} />
                <PrivateRoute path="/topics" component={TopicDashboardExpensePage} />
            </Switch>
        </div>
    </Router>
);

 export default AppRouter