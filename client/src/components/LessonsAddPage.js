import React from 'react';
import {makeStyles} from "@material-ui/core";
import {Formik} from 'formik';
import TopicForm from './TopicForm';
import {object as yupObject, string as yupString, date as yupDate} from "yup";
import {connect} from "react-redux";
import {startAddTopic} from "../actions/topics";
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
    name: yupString("Please write name for topic").required("Name is required"),
    description: yupString("Please write description for topic").required("Description is required"),
    schedule: yupDate("Please specify the start date for topic").required('Start date is required')
});

function LesssonsAddPage(props) {
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
        const topicDetails = {name, description, schedule};
        props.startAddTopic(topicDetails);
    }

    return (
        < main
            className={classes.content}>
            < div
                className={classes.toolbar}
            />
            <div>
                <h2>Add new topic</h2>
                <Formik
                    initialValues={values}
                    validationSchema={validationSchema}
                    onSubmit={values => handleSubmit(values)}
                    render={props => <TopicForm {...props} buttonValue={'Create Topic'}/>}
                />
            </div>
        </main>
    )
}

const mapDispatchToProps = dispatch => ({
    startAddTopic: (topicDetails) => dispatch(startAddTopic(topicDetails)),
});

export default connect(null, mapDispatchToProps)(LesssonsAddPage);


