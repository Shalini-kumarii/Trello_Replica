import React from 'react';
import { Paper,Typography,CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Cards from './Cards';
import InputContainer from './InputContainer';



const useStyle= makeStyles((theme) =>({
    root:{
        width:'300px',
        backgroundColor:'gray',
        marginLeft:'20px',
    },
}));

export default function List({ list }){
    const classes = useStyle();
    return(
        <div>
        
        <Paper className ={classes.root}>
        <CssBaseline />
       <Title title={list.title} listId={list.id}/>   {/*updating the list title with list id */}
    {/* Looping over list of card data stored in store */}

        {list.cards.map((card) =>(
            <Cards key={card.id} card= { card }  />     /* Pass card to Cards */ 
        ))}

        <InputContainer listId={list.id} type ="card"/>
        </Paper>
        </div>
    );
}