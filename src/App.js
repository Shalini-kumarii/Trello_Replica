import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import {v4 as uuid} from "uuid";

import List from './components/List';
import Store from './ListItems/Store';
import StoreApi from './ListItems/StoreApi';
import Title from './components/Title';
import InputContainer from './components/InputContainer';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';


const useStyle = makeStyles((theme) =>({
  root:{
      display:"flex",
      minHeight:'100vh',
      background:"#228b22",
    },

    nav:{
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    color:"white",

    },

}))

export default function App(){
  const[data,setData] =useState(Store);
  const classes = useStyle();
  const addMoreCard= (content,listId) =>{
      console.log(content,listId);
      const newCardId = uuid();
      //console.log(newCardId);
        const newCard ={
        id:newCardId,
        content,
      };

      const list= data.lists[listId];
      list.cards = [...list.cards,newCard];
      console.log(list.cards);

      const newState = {
        ...data,
        lists:{
          ...data.lists,

          [listId]: list,
        },
      };
      setData(newState);
  };

  const addMoreList=(title) =>{
    const newListId = uuid();
    const newList ={
      id:newListId,
      title,
      cards:[],
    };
    const newState ={
      listIds:[...data.listIds,newListId],
      lists:{
        ...data.lists,
        [newListId]:newList
      }
    
    }
    setData(newState);
  };


  const updateListTitle =(title,listId) => {
    console.log(title);
    const list = data.lists[listId];
    list.title =title;
    const newState ={
      ...data,
      lists:{
        ...data.lists,
        [listId]:list
      }
    
    }

    setData(newState);
  };


    return(
      <StoreApi.Provider value ={{ addMoreCard,addMoreList,updateListTitle}}>
      <div className={classes.nav}><h1>Trello_Replica</h1></div>
      <div className={classes.root}>
      
      {data.listIds ?
      data.listIds.map((listId) =>{
        const list =data.lists[listId];
        return<List list ={list} key={listId}/>;
      } ) :<p>...</p>}
      <InputContainer type=""list/>
      </div>

      </StoreApi.Provider>
    );
  }



