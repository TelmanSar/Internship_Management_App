import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Header from '../components/Header';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1
    }
}));

export const PrivateRoute = ({
                                 token,
                                 component: Component,
                                 ...rest
                             }) => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const classes = useStyles();

    return <Route {...rest} component={(props) => (
        // true ? (
            <div className={classes.root}>
                <Header handleDrawerToggle={handleDrawerToggle}
                        mobileOpen={mobileOpen}/>
                <Sidebar
                    handleDrawerToggle={handleDrawerToggle}
                    mobileOpen={mobileOpen}
                />
                <Component {...props} />

            </div>
        // ) : (
        //     <Redirect to="/" />
        // )
    )} />
};

const mapStateToProps = (state) => ({
    token: !!state.token
});

export default connect(mapStateToProps)(PrivateRoute);
