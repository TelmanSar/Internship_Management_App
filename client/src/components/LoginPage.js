import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import LoginForm from './LoginForm'
import {startLogin} from '../actions/authentication';
import {Formik} from "formik";
import {object as yupObject, string as yupString} from "yup";
import Background from '../images/login_page.jpg';


const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },

}));


const validationSchema = yupObject({
    email: yupString("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: yupString("")
        .required("Enter your password"),
});

function LoginPage(props) {
    const classes = useStyles();

    const values = {
        email: "",
        password: "",
    };

    function handleSubmit(values) {
        const {
            email,
            password
        } = values;
        const userCredentials = {email, password};
        props.startLogin(userCredentials);
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Formik
                        initialValues={values}
                        validationSchema={validationSchema}
                        onSubmit={values => handleSubmit(values)}
                        render={props => <LoginForm {...props}/>}
                    />
                </div>
            </Grid>
        </Grid>
    );
}


const mapDispatchToProps = dispatch => ({
    startLogin: userCredentials => dispatch(startLogin(userCredentials))
});

export default connect(null, mapDispatchToProps)(LoginPage);
