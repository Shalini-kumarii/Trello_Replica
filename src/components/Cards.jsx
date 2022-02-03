import React from "react";
import { makeStyles, Paper } from '@material-ui/core'
import { mergeClasses } from "@material-ui/styles";

const useStyle = makeStyles((theme) =>({
    card:{
        padding:theme.spacing(1),
        margin:theme.spacing(1),
    }
}))

export default function Cards({ card })
{
    const classes= useStyle();
    return(
        <div>
        <Paper className={classes.card}>{ card.content }</Paper>
        </div>
    );
}

