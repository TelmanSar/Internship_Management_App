import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: "column"
    },
    textField: {
        margin: theme.spacing(1),
        flexGrow: 1
    },
    menu: {
        width: 200,
    },
}));


export default function UserForm(props) {
    const {
        values: {name, lastname, email, password, role },
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
        e.preventDefault();
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={classes.root}
        >
            <div>
            <TextField
                id='name'
                name='name'
                label='Name'
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                className={classes.textField}
                value={name}
                onChange={change.bind(this,'name')}
            />
            <TextField
                id='lastname'
                name='lastname'
                label='Lastname'
                helperText={touched.lastname ? errors.lastname : ""}
                error={touched.lastname && Boolean(errors.lastname)}
                className={classes.textField}
                value={lastname}
                onChange={change.bind(this,'lastname')}
            />
            </div>
            <TextField
                id='email'
                name='email'
                label='Email'
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                className={classes.textField}
                value={email}
                onChange={change.bind(this,'email')}
            />
            <TextField
                id='password'
                name='password'
                label='Password'
                helperText={touched.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}
                className={classes.textField}
                value={password}
                onChange={change.bind(this,'password')}
            />
            <TextField
                id="select-role"
                name='role'
                select
                label="Role"
                helperText={touched.role ? errors.role : ""}
                error={touched.role && Boolean(errors.role)}
                className={classes.textField}
                value={role}
                onChange={change.bind(this,'role')}
                SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                }}
                margin="normal"
            >
                <MenuItem key='intern' value='intern'>
                    Intern
                </MenuItem>
                <MenuItem key='admin' value='admin'>
                    Admin/Mentor
                </MenuItem>
            </TextField>
            <Button
                type="submit"
                disabled={!isValid}
                variant="contained"
                color="primary"
                className={classes.textField}
            >
                {buttonValue}
            </Button>
        </form>
    )
};