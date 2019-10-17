import React from 'react';
import {makeStyles} from "@material-ui/core";
import {Formik} from 'formik';
import TopicForm from './TopicForm';
import {object as yupObject, string as yupString, date as yupDate} from "yup";
import {connect} from "react-redux";
import {startAddLesson} from "../actions/lessons";
import * as moment from 'moment';

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        display: 'flex',
        flexDirection: "column",
        padding: theme.spacing(3),
    },
}));

const validationSchema = yupObject({
    name: yupString("Please write name for lesson").required("Name is required"),
    description: yupString("Please write description for lesson").required("Description is required"),
    schedule: yupDate("Please specify the start date for lesson").required('Start date is required')
});

function TopicsAddPage(props) {
    const classes = useStyles();

    const values = {
        name: "",
        description: "",
        schedule: new Date()
    };

    function handleSubmit(values) {
        let {
            name,
            description,
            schedule,
        } = values;
        schedule = moment.utc(schedule).format('YYYY-MM-DD HH:mm:ss');
        const lessonDetails = {name, description, schedule};
        props.startAddTopic(lessonDetails);
    }

    return (
        < main
            className={classes.content}>
            < div
                className={classes.toolbar}
            />
            <div>
                <h2>Add new lesson</h2>
                <Formik
                    initialValues={values}
                    validationSchema={validationSchema}
                    onSubmit={values => handleSubmit(values)}
                    render={props => <TopicForm {...props} buttonValue={'Create Lesson'}/>}
                />
            </div>
        </main>
    )
}

const mapDispatchToProps = dispatch => ({
    startAddLesson: (lessonDetails) => dispatch(startAddLesson(lessonDetails)),
});

export default connect(null, mapDispatchToProps)(TopicsAddPage);


