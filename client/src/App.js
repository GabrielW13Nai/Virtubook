// import logo from './logo.svg';
import React from 'react';
import './App.css';
import ListOfBooks from './components/ListOfBooks';
import BookAdd from './components/BookAdd';
// import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';





function App() {


  return (
    <div className="App">
      {/* <Header /> */}
      {/* <NavLink to="/books" ></NavLink> */}

      {/* <p>Welcome to the library</p> */}

      <Switch>
        <Route path='/' element={<ListOfBooks />} />
        <Route path='/bookadd' element={<BookAdd />} />
        <Route path='/books' element={<ListOfBooks />} />
      </Switch>

    </div>


  );
}

export default App;



