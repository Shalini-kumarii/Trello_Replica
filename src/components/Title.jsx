import React,{ useContext, useState } from 'react';
import { Paper,Typography,InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StoreApi from '../ListItems/StoreApi';


const useStyle= makeStyles((theme) =>({
    editableTitleContainer:{
        margin: theme.spacing(1),
        display: 'flex',

    },

    editableTitle:{
        flexGrow:1,
        fontSize:'1.2rem',
        fontWeight:'bold',
        },

    input:{
        fontSize:'1.2rem',
        fontWeight:'bold',
        margin:theme.spacing(1),
        "&:focus":{
            background:'#add',
        }
    }
}));


export default function Title({ title,listId }){
    const [open,setOpen] = useState(false);
    const classes =useStyle();
    const [newTitle,setNewTitle] = useState(title);
    const { updateListTitle } = useContext(StoreApi);

    const handleChange= (e) => {
        setNewTitle(e.target.value);
    };

    const handleOnBlur=()=>{
        updateListTitle(newTitle,listId);
        setOpen(false);
    };

    return(
        <div>
        {open ? (
        
        <div>
            <InputBase 
            onChange={handleChange}  //It will update the title on change
            autoFocus 
            value={ newTitle }
            inputProps={{
                className:classes.input,
            }}
            fullWidth
            onBlur={handleOnBlur}
            />
        </div>) :(
            <div className={classes.editableTitleContainer}>
            <Typography 
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}>{ title }</Typography>
            </div>
        )}
        </div>
    );
    }