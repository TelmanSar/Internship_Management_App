import React, {useEffect} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import {KeyboardDateTimePicker} from "@material-ui/pickers";
import {Form, Field} from "formik";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: "column"
    },
    textField: {
        margin: theme.spacing(1),
        flexGrow: 1
    },

}));

const DatePickerField = ({ field, form, ...other }) => {
    const currentError = form.errors[field.name];

    return (
        <KeyboardDateTimePicker
            clearable
            disablePast
            name={field.name}
            label='Start Date'
            format='YYYY-MM-DD HH:mm'
            value={field.value}
            onChange={date => form.setFieldValue(field.name, date, true)}
        />
    );
};
export default function TopicForm(props) {
    const {
        values: {name, description},
        errors,
        touched,
        handleChange,
        handleSubmit,
        isValid,
        setFieldTouched,
        buttonValue
    } = props;

    const classes = useStyles();

    const change = (name, e) => {
        handleChange(e);
        setFieldTouched(name, true, false);
    };

    return (
        <Form
            onSubmit={handleSubmit}
            className={classes.root}
        >

            <TextField
                id='topicName'
                name='name'
                label='Name'
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                className={classes.textField}
                value={name}
                onChange={change.bind(this, 'name')}
            />

            <TextField
                id='topicDescription'
                name='description'
                label='Description'
                helperText={touched.description ? errors.description : ""}
                error={touched.description && Boolean(errors.description)}
                className={classes.textField}
                value={description}
                onChange={change.bind(this, 'description')}
            />

            <Field
                name="schedule"
                className={classes.textField}
                component={DatePickerField}
            />


            <Button
                type="submit"
                disabled={!isValid}
                variant="contained"
                color="primary"
                className={classes.textField}
            >
                {buttonValue}
            </Button>
        </Form>
    )
};