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
import {startGetTopics, startRemoveTopic} from "../actions/topics";
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
    actions: {
        color: theme.palette.text.secondary,
        marginLeft: 'auto',
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

function TopicsList(props) {
    const role_id = localStorage.getItem('role_id');

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);


    const startGetTopics = props.startGetTopics;
    useEffect(() => {
        startGetTopics()
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
                        Topics available for you
                    </Typography>
                    <div className={classes.actions}>
                        <Tooltip title="Add user">
                            <Fab color="primary"
                                 aria-label="add"
                                 size="small"
                                 component={Link}
                                 to={'create_topic'}
                            >
                                <AddIcon/>
                            </Fab>
                        </Tooltip>
                    </div>
                </Container>

                {
                    props.topics.map(topic => (
                        <ExpansionPanel key={topic.id} expanded={expanded === `panel${topic.id}`}
                                        onChange={handleChange(`panel${topic.id}`)}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls={`panel${topic.id}bh-content`}
                                id={`panel${topic.id}bh-header`}
                            >
                                <Typography className={classes.heading}>{topic['name']}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography className={classes.summaryContent}>
                                    {topic['description']}
                                </Typography>
                                <Divider/>
                                <Typography variant="caption" className={classes.summaryLink}>
                                    <Chip label="lessons" component={Link} className={classes.link} to={`/lessons/${topic.id}`}/>
                                </Typography>
                            </ExpansionPanelDetails>
                            <Divider/>
                            <ExpansionPanelActions>
                                <IconButton color="primary" component={Link}
                                            to={`edit_topic/${topic.id}`}>
                                    <EditIcon/>
                                </IconButton>
                                {+role_id === 1 && <IconButton color="secondary" onClick={() => {
                                    props.startRemoveTopic(topic.id)
                                }}>
                                    <DeleteIcon/>
                                </IconButton>}
                            </ExpansionPanelActions>
                        </ExpansionPanel>
                    ))
                }


            </Paper>
        </main>
    );
}


const mapStateToProps = (state) => {
    return {
        topics: state.topics
    };
};

const mapDispatchToProps = (dispatch) => ({
    startGetTopics: () => dispatch(startGetTopics()),
    startRemoveTopic: (id) => dispatch(startRemoveTopic({
        id: id
    }))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList);