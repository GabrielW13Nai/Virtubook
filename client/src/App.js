// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Body from './components/Body'
import ListOfBooks from './components/ListOfBooks'


function App({onAdd}) {


  return (
    <div className="App">
      <Body onAdd= {onAdd} />
      <ListOfBooks />
    </div>


  );
}

export default App;



