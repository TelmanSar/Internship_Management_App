import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import {Formik} from 'formik';
import UserForm from './UserForm';
import {object as yupObject, string as yupString} from "yup";
import {connect} from "react-redux";
import {startUpdateUser} from "../actions/users";
import {startGetUser} from "../actions/editables";
import {getRoleFromId, generateRoleId} from '../general/helpers';


const useStyles = makeStyles(theme => ({
    content: {
        display: 'flex',
        flexDirection: "column",
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
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

function UsersEditPage(props) {
    const classes = useStyles();
    const userId = +props.match.params.id;
    const getUser = props.startGetUser;
    useEffect(() => {
        getUser(userId);
    }, []);

    function handleSubmit(values) {
        const {
            id,
            name,
            lastname,
            email,
            password,
            role
        } = values;
        const updates = {name, lastname, email, password, role_id: generateRoleId(role)};
        props.startUpdateUser(id, updates);
    }

    const [values, setValues] = useState({});

    useEffect(() => {
        setValues({...props.user, password: "", role: getRoleFromId(props.user['role_id'])});
    }, [props.user]);

    return (
    < main
            className={classes.content}>
            < div
                className={classes.toolbar}
            />
            <div>
                <h1>Edit Form</h1>{
                values.hasOwnProperty('name') && (
                    <Formik
                        initialValues={values}
                        validationSchema={validationSchema}
                        onSubmit={values => handleSubmit(values)}
                        render={props => <UserForm {...props} buttonValue={'Update'}/>}
                    />
                )
            }
            </div>
        </main>
    )
}

const mapStateToProps = (state) => {
    return({
    user: state.editables.user
})};

const mapDispatchToProps = dispatch => ({
    startUpdateUser: (id, updates) => dispatch(startUpdateUser(id, updates)),
    startGetUser: userId => dispatch(startGetUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersEditPage);