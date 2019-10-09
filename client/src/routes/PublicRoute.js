import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
                                isAuthenticated,
                                component: Component,
                                ...rest
                            }) => (
    <Route {...rest} component={(props) => {
       return (
           localStorage.getItem('access-token') ? (
                <Redirect to="/home"/>
            ) : (
                <Component {...props} />
            )
        )
    }
    } />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.id
});

export default connect(mapStateToProps)(PublicRoute);
