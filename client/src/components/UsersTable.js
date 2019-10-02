import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import {startGetUsers, startRemoveUser} from "../actions/users";
import {Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {userColumns} from '../data/columns';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";


const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    title: {
        flex: '0 0 auto',
    },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    tableWrapper: {
        overflow: 'auto',
        width: '100%'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    fab: {
        margin: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
}));

function UsersTable(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const startGetUsers = props.startGetUsers;
    useEffect(() => {
        startGetUsers()
    }, [startGetUsers]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Paper>
                <Toolbar className={classes.root}>
                    <div className={classes.title}>
                        <Typography variant="h6" id="tableTitle">
                            Users
                        </Typography>
                    </div>
                    <div className={classes.spacer}/>
                    <div className={classes.actions}>
                        <Tooltip title="Add user">
                            <Fab color="primary"
                                 aria-label="add"
                                 className={classes.fab}
                                 size="small" component={Link}
                                 to={'create_user'}
                            >
                                <AddIcon/>
                            </Fab>
                        </Tooltip>
                    </div>
                </Toolbar>
                <div className={classes.tableWrapper}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {userColumns.map(column => (
                                    <TableCell
                                        key={column.id}
                                        style={{minWidth: column.minWidth}}
                                    >
                                        {column.label}
                                    </TableCell>))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {

                                const removeUser = () => {
                                    props.startRemoveUser(row.id)
                                };

                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {userColumns.map(column => {
                                            const value = row[column.id];
                                            if (column.id === 'action') {
                                                return <TableCell key={column.id} style={{display: 'flex'}}>
                                                        <IconButton color="primary" component={Link}
                                                                    to={`edit_user/${row.id}`}>
                                                            <EditIcon/>
                                                        </IconButton>
                                                        <IconButton color="secondary" onClick={removeUser}>
                                                            <DeleteIcon/>
                                                        </IconButton>
                                                </TableCell>
                                            } else {
                                                return (
                                                    <TableCell key={column.id}>
                                                        {value}
                                                    </TableCell>
                                                );
                                            }
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={props.users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'previous page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'next page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => ({
    startGetUsers: () => dispatch(startGetUsers()),
    startRemoveUser: (id) => dispatch(startRemoveUser({
        id: id
    }))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);