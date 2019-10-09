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
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

function TopicsList(props) {
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
                    props.topics.map(topic=>(
                        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={classes.heading}>General settings</Typography>
                                <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                    maximus est, id dignissim quam.
                                </Typography>
                            </ExpansionPanelDetails>
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