import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link }from "react-router-dom";
import Button from "@material-ui/core/Button";
import {startLogOut} from "../actions/authentication";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    homeButton: {
        color:'inherit',
        textDecoration: 'none'
    },
    title: {
        flexGrow: 1,
    },
}));

function Header(props) {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={props.handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap className={classes.title}>
                    <Link className={classes.homeButton} to='/home' >Fluxify</Link>
                </Typography>
                <Button onClick={props.startLogOut} color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    );
}

const mapDispatchToProps = dispatch => {
    return ({
        startLogOut: () => dispatch(startLogOut())
    })
};
export default connect(null, mapDispatchToProps)(Header)


