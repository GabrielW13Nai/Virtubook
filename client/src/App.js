// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import { Route, Switch } from 'react';
import Header from './components/Header';
import BookAdd from './components/BookAdd';



function App() {


  return (
    <div className="App">

      <BookAdd />
      <Header />
      {/* <Switch>
        <Route exact path="/add">Add book</Route>
      </Switch> */}
    </div>


  );
}

export default App;



