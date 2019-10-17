import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Header from '../components/Header';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1
    }
}));

const PrivateRoute = ({
                          isAuthenticated,
                          component: Component,
                          ...rest
                      }) => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const classes = useStyles();
    return <Route {...rest} component={(props) => (
        localStorage.getItem('access-token') ? (
            <div className={classes.root}>
                <Header handleDrawerToggle={handleDrawerToggle}
                        mobileOpen={mobileOpen}/>
                <Sidebar
                    handleDrawerToggle={handleDrawerToggle}
                    mobileOpen={mobileOpen}
                    {...props}
                />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/"/>
        )
    )}/>
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.id
});

export default connect(mapStateToProps)(PrivateRoute);
