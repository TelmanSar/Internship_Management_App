import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {makeStyles, Paper} from "@material-ui/core";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from "@material-ui/core/Tooltip";
import {startGetLessons, startRemoveLesson} from "../actions/lessons";
import {connect} from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    listHeading: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(2),
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    summaryContent: {
        flexBasis: '90%',
    },
    summaryLink: {
        padding: theme.spacing(1, 2),
        borderLeft: `2px solid ${theme.palette.divider}`,
        flexBasis: '10%',
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },

}));

function LessonsList(props) {
    const role_id = localStorage.getItem('role_id');
    const topic_id =  props.match.params.id;
    console.log(topic_id);
    

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);


    const startGetLessons = props.startGetLessons;
    useEffect(() => {
        startGetLessons(topic_id)
    }, []);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Paper>
                <Container className={classes.listHeading}>
                    <Typography variant="h6">
                        Lessons available for you
                    </Typography>
                </Container>
                {
                    props.lessons.map(lesson => (
                        <ExpansionPanel key={lesson.id} expanded={expanded === `panel${lesson.id}`}
                                        onChange={handleChange(`panel${lesson.id}`)}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls={`panel${lesson.id}bh-content`}
                                id={`panel${lesson.id}bh-header`}
                            >
                                <Typography className={classes.heading}>{lesson['name']}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography className={classes.summaryContent}>
                                    {lesson['description']}
                                </Typography>
                                <Divider/>
                                <Typography variant="caption" className={classes.summaryLink}>
                                    <Chip label="Link to lesson" component="a" className={classes.link} href={`${lesson.link}`} clickable />
                                </Typography>
                            </ExpansionPanelDetails>
                            <Divider/>
                            {+role_id !== 3 &&  <ExpansionPanelActions>
                                <IconButton color="primary" component={Link}
                                            to={`edit_lesson/${lesson.id}`}>
                                    <EditIcon/>
                                </IconButton>
                                {+role_id === 1 && <IconButton color="secondary" onClick={() => {
                                    props.startRemoveLesson(lesson.id)
                                }}>
                                    <DeleteIcon/>
                                </IconButton>}
                            </ExpansionPanelActions> }
                        </ExpansionPanel>
                    ))
                }
            </Paper>
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        lessons: state.lessons
    };
};

const mapDispatchToProps = (dispatch) => ({
    startGetLessons: (topic_id) => dispatch(startGetLessons(topic_id)),
    startRemoveLesson: (id) => dispatch(startRemoveLesson({
        id: id
    }))
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonsList);