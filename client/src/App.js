// import logo from './logo.svg';
import React from 'react';
import './App.css';
import ListOfBooks from './components/ListOfBooks';
import BookAdd from './components/BookAdd';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';





function App() {


  return (
    <div className="App">

      {/* <NavLink to="/books" ></NavLink> */}

      <p> <span className='shade'>Virtubook</span></p>

      <Header />
      <Switch>
        <Route path='/' element={<ListOfBooks />} />
        <Route path='/bookadd' element={<BookAdd />} />
        <Route path='/books' element={<ListOfBooks />} />
        <Route path='/bookdisplay' element={<ListOfBooks />} />
        <Route path='/bookview' element={<ListOfBooks />} />
        <Route path='/bookupdate' element={<ListOfBooks />} />


      </Switch>

    </div>


  );
}

export default App;



