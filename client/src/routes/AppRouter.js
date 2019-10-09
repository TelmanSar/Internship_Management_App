import React from 'react';
import {createBrowserHistory} from 'history';
import LoginPage from '../components/LoginPage';
import HomePage from '../components/HomePage';
import UsersTable from "../components/UsersTable";
import UsersAddPage from "../components/UsersAddPage";
import UsersEditPage from '../components/UsersEditPage'
import TopicsList from '../components/TopicsList';
import TopicsAddPage from "../components/TopicsAddPage";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import {Router, Switch} from 'react-router-dom';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>s
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/home" component={HomePage}/>
                <PrivateRoute path="/users" component={UsersTable}/>
                <PrivateRoute path="/create_user" component={UsersAddPage}/>
                <PrivateRoute path="/edit_user/:id" component={UsersEditPage}/>
                <PrivateRoute path="/topics" component={TopicsList}/>
                <PrivateRoute path="/create_topic" component={TopicsAddPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter