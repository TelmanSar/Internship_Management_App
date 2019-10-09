import React from 'react';
import {makeStyles} from "@material-ui/core";
import {Formik} from 'formik';
import TopicForm from './TopicForm';
import {object as yupObject, string as yupString, date as yupDate} from "yup";
import {connect} from "react-redux";
import {startAddTopic} from "../actions/topics";

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        display: 'flex',
        flexDirection: "column",
        padding: theme.spacing(3),
    },
}));

const validationSchema = yupObject({
    topicName: yupString("Please write name for topic").required("Name is required"),
    topicDescription: yupString("Please write description for topic").required("Description is required"),
    availableAt: yupDate("Please specify the start date for topic").required('Start date is required')
});

function TopicsAddPage(props) {
    const classes = useStyles();

    const values = {
        topicName: "",
        topicDescription: "",
        availableAt: new Date()
    };

    function handleSubmit(values) {
        const {
            topicName,
            topicDescription,
            availableAt,

        } = values;
        const userCredentials = {topicName, topicDescription, availableAt};
        props.startAddTopic(userCredentials);
        props.history.push("/topics");
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
    startAddTopic: (userCredentials) => dispatch(startAddTopic(userCredentials)),
});

export default connect(null, mapDispatchToProps)(TopicsAddPage);


