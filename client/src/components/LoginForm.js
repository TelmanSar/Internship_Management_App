import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    textField: {
        margin: theme.spacing(1),
        flexGrow: 1
    },
    menu: {
        width: 200,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}));

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://fluxtech.me/">
                Flux Technologies
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function LoginForm(props) {
    const {
        values: { email, password },
        errors,
        touched,
        handleChange,
        handleSubmit,
        isValid,
        setFieldTouched,
    } = props;

    const classes = useStyles();

    const change = (name, e) => {
        e.preventDefault();
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={classes.root}
        >
            <TextField
                id='login-email'
                name='email'
                label='Email Address'
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                className={classes.textField}
                value={email}
                onChange={change.bind(this,'email')}
                variant="outlined"
                margin="normal"
                fullWidth
                autoComplete="email"
                autoFocus
            />
            <TextField
                id='login-password'
                name='password'
                label='Password'
                helperText={touched.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}
                className={classes.textField}
                value={password}
                onChange={change.bind(this,'password')}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="password"
                autoComplete="current-password"
            />
            <Button
                type="submit"
                disabled={!isValid}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign In
            </Button>

            <Box mt={5}>
                <Copyright />
            </Box>
        </form>
    )
};