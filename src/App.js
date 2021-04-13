import './App.css';
import React from 'react';
import Title from './components/title';
import Form from './components/Form';
import Control from './components/Control';
import List from './components/List';
import Task from './mocks/Task';
// import redux from './redux';
import { useSelector, useDispatch  } from 'react-redux'
import {searchTodo} from  './actions'
import { useState } from 'react';


function App(props) {

  const itemss = useSelector(state => state.items)
  const isSearch = useSelector(state => state.isSearch)
  const dispatch = useDispatch();

  if(isSearch == 'tien') {
    dispatch(searchTodo('', [{name: 'tien', level: 2, id: 'abc123'}]));
  }

  return (
    <div className="App">
      <div className="container">
        {/* TITLE : END */}
        <Title /> 
        {/* TITLE : END */}
        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
        {/* FORM : START */}
            <Form />
        {/* FORM : END */}
        {/* LIST : START */}
        <List items={itemss}/>
        {/* LIST : END */}
      </div>
    </div>
  );
}


export default App;
