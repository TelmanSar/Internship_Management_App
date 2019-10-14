import React from "react";
import {Box, makeStyles} from "@material-ui/core";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

function HomePage(props) {
    const classes = useStyles();

    return (
        <Box className={classes.content}>
            <div className={classes.toolbar}/>
            <h1>
                Welcome {props.authUser.name}
            </h1>
        </Box>
    );
}

const mapStateToProps = state => {
    return ({
        authUser: state.auth
    })
};
export default connect(mapStateToProps)(HomePage)
