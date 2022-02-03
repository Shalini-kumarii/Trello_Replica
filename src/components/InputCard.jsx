import { Typography,Paper,InputBase,Button,IconButton } from '@material-ui/core';
import React,{ useContext, useState } from 'react';
import ClearIcon from '@material-ui/icons/Clear'
import { makeStyles,alpha} from '@material-ui/core/styles';
import StoreApi from '../ListItems/StoreApi';

const useStyle= makeStyles((theme) =>({
    card:{
        
        margin:theme.spacing(0,1,1,1),
        paddingBottom: theme.spacing(4),
    },
    input:{
        
        margin: theme.spacing(1),
    },
    btn:{
        background:"#5AAC44",
        color:"#fff",
        "&:hover":{
            background:alpha("#5AAC44",0.75),
        }
    },
    confirm:{
        margin:theme.spacing(0,1,1,1),
    }
}));

export default function InputCard({ setOpen, listId, type }){
    const classes = useStyle();
    const[title,setTitle] = useState("");
    const { addMoreCard,addMoreList } = useContext(StoreApi);
    const changeHandler =(e) => {
        setTitle(e.target.value);
    };

    
    const handleBtn =() =>{
        if(type == 'card'){
        addMoreCard(title,listId);
        setOpen(false);
        }
        else{
            addMoreList(title);
            setOpen(false);
        }
    }


    return(
        <div>
        <div >
        <Paper className={classes.card}>
        <InputBase multiline              /*Keep track of input value of card which going to change */
        onChange={changeHandler}
        onBlur={()=> setOpen(false)}
        fullWidth  
        inputProps={{
            classes:classes.input,
        }}
        value={title}
        placeholder={type == 'card'? "Enter a title of this card":"Enter List Title"}
        />
        </Paper>
        </div>
        <div className={classes.confirm}>
        <Button className={classes.btn} onClick={() => handleBtn()}>{type == "card" ? "Add Card" :"Add List"}</Button>
        <IconButton  onClick={() => setOpen(false)}>
        <ClearIcon />
        </IconButton>
        </div>
        </div>
    );
}