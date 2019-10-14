import React from 'react';
import {makeStyles} from "@material-ui/core";
import {Formik} from 'formik';
import UserForm from './UserForm';
import {object as yupObject, string as yupString} from "yup";
import {connect} from "react-redux";
import {startAddUser} from "../actions/users";

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        display: 'flex',
        flexDirection: "column",
        padding: theme.spacing(3),
    },
}));

const validationSchema = yupObject({
    name: yupString("Enter a name").required("Name is required"),
    lastname: yupString("Enter a lastname").required("lastname is required"),
    email: yupString("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: yupString("")
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password"),
    role: yupString("Select a lastname").required("role is required"),
});

function UsersAddPage(props) {
    const classes = useStyles();

    const values = {
        name: "",
        lastname: "",
        email: "",
        password: "",
        role: ""
    };

    function handleSubmit(values) {
        const {
            name,
            lastname,
            email,
            password,
            role
        } = values;
        const userCredentials = {name, lastname, email, password, role};
        props.startAddUser(userCredentials);
    }

    return (
        < main
            className={classes.content}>
            < div
                className={classes.toolbar}
            />
            <div>
                <h1>Add new User Form</h1>
                <Formik
                    initialValues={values}
                    validationSchema={validationSchema}
                    onSubmit={values => handleSubmit(values)}
                    render={props => <UserForm {...props} buttonValue={'Create User'}/>}
                />
            </div>
        </main>
    )

}

const mapDispatchToProps = dispatch => ({
    startAddUser: (userCredentials) => dispatch(startAddUser(userCredentials)),
});

export default connect(null, mapDispatchToProps)(UsersAddPage);


