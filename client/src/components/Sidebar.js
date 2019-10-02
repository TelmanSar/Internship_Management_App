import React from 'react';
import {Link} from 'react-router-dom';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import {makeStyles} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import MenuBookSharpIcon from '@material-ui/icons/MenuBookSharp';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import HomeIcon from '@material-ui/icons/Home';

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
}));


export default function Sidebar(props) {
    const classes = useStyles();
    const role = "admin";

    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>

            {(role === 'admin' || role === "superAdmin") ? (
                    <List>
                        <ListItem button key={'Home'} component={Link} to='/home'>
                            <ListItemIcon><HomeIcon/></ListItemIcon>
                            <ListItemText primary='Home'/>
                        </ListItem>
                        <ListItem button key={'Users'} component={Link} to='/users'>
                            <ListItemIcon><PeopleAltSharpIcon/></ListItemIcon>
                            <ListItemText primary='Users'/>
                        </ListItem>
                        <ListItem button key="Topics" component={Link} to='/topics'>
                            <ListItemIcon><MenuBookSharpIcon/></ListItemIcon>
                            <ListItemText primary="Topics"/>
                        </ListItem>
                    </List>)
                :
                <List>
                    <ListItem button key="Topics">
                        <ListItemIcon><MenuBookSharpIcon/></ListItemIcon>
                        <ListItemText primary="Topics"/>
                    </ListItem>
                </List>
            }

        </div>
    );


    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    open={props.mobileOpen}
                    onClose={props.handleDrawerToggle}
                    onClick={props.handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: false, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    )
}


