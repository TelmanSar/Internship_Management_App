import React from 'react';
import {makeStyles} from "@material-ui/core";
import { Formik } from 'formik';
import UserForm from './UserForm';
import {object as yupObject, string as yupString} from "yup";


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

export default function UsersEditPage(props) {
    const classes = useStyles();
    const values = { name: "", lastname: "", email: "", password: "", role: "" };
   return (
       < main
           className = {classes.content} >
           < div
               className = {classes.toolbar}
           />
           <div>
               <h1>Edit Form</h1>
               <Formik
                   render={props => <UserForm {...props} />}
                   initialValues={values}
                   validationSchema={validationSchema}
               />


           </div>
       </main>
   )
}
