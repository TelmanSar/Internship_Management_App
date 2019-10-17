import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import {Formik} from 'formik';
import {date as yupDate, object as yupObject, string as yupString} from "yup";
import TopicForm from "./TopicForm";
import {connect} from "react-redux";
import {startGetTopic,} from "../actions/editables";
import {startUpdateTopic} from "../actions/topics";


const useStyles = makeStyles(theme => ({
    content: {
        display: 'flex',
        flexDirection: "column",
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

const validationSchema = yupObject({
    name: yupString("Please update name for topic").required("Name is required"),
    description: yupString("Please update description for topic").required("Description is required"),
    schedule: yupDate("Please specify the start date for topic").required('Start date is required')
});

function TopicsEditPage(props) {
    const classes = useStyles();
    const topicId = +props.match.params.id;
    const GetTopic = props.GetTopic;
    useEffect(() => {
        GetTopic(topicId);
    }, []);

    function handleSubmit(values) {
        const {
            id,
            name,
            description,
            schedule,
        } = values;
        const updates = {name, description, schedule};
        props.UpdateTopic(id, updates);
    }

    const [values, setValues] = useState({});

    useEffect(() => {
        setValues({...props.topic});
    }, [props.topic]);

    return (
        < main
            className={classes.content}>
            < div
                className={classes.toolbar}
            />
            <div>
                <h2>Edit topics for update</h2>{
                values.hasOwnProperty('name') && (
                    <Formik
                        initialValues={values}
                        validationSchema={validationSchema}
                        onSubmit={values => handleSubmit(values)}
                        render={props => <TopicForm {...props} buttonValue={'Update'}/>}
                    />
                )
            }
            </div>
        </main>
    )
}

const mapStateToProps = (state) => {
    return ({
        topic: state.editables.topic
    })
};

const mapDispatchToProps = dispatch => ({
    UpdateTopic: (id, updates) => dispatch(startUpdateTopic(id, updates)),
    GetTopic: topicId => dispatch(startGetTopic(topicId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicsEditPage);