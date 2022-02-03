import { Typography,Paper,Collapse } from '@material-ui/core';
import React,{ useState } from 'react';
import List from "./List";
import { makeStyles,alpha} from '@material-ui/core/styles';
import InputCard from './InputCard';

const useStyle= makeStyles((theme) =>({
    root:{
        marginTop:theme.spacing(1),
        width:"250px",
    },
    addCard:{
        padding: theme.spacing(1,1,1,2),
        background:"gray",
        "&:hover":{
            backgroundColor:alpha('#000',0.25),
        },
        margin: theme.spacing(0,1,1,1),
    },
}));


export default function InputContainer( { listId,type}){
    const classes = useStyle();
    const[open,setOpen]= useState(false);
    return(
        <div className={classes.root}>
        <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type}/>
        </Collapse>
        <Collapse in={!open}>
        <Paper className={classes.addCard} elevation={0} onClick={() =>setOpen(!open)}>
        <Typography>{type == "card"? "Add a Card" : "Add another List"}</Typography>
        </Paper>
        </Collapse>
        </div>
    );
    }