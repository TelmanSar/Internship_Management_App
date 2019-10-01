import React from "react";
import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

export default function Header() {
    const classes = useStyles();

    return (
        <Box className = {classes.content}>
            <div className={classes.toolbar} />
            <div><img src={"../image-asset.jpeg"} alt="Samo"/> </div>
        </Box>
    );
}