// import logo from './logo.svg';
import React from 'react';
import './App.css';
import BookList from './Pages/BookList';
import AddBook from './Pages/AddBook';
import Home from './Pages/Home';
import { Switch, Route } from 'react-router-dom';

function App() {


  return (
    <div className="App">

      {/* <NavLink to="/books" ></NavLink> */}

      <p> <span className='shade'>Virtubook</span></p>


      <Switch>
        {/* <Route path='/' element={<ListOfBooks />} /> */}
        <Route exact path='/'> <Home /> </Route>
        <Route exact path='/addbook'> <AddBook /> </Route>
        <Route exact path='/books'><BookList /></Route>
        <Route exact path='/bookedit'></Route>
        {/* <Route path='/bookdisplay' element={<ListOfBooks />} />
        <Route path='/bookview' element={<ListOfBooks />} />
        <Route path='/bookupdate' element={<ListOfBooks />} /> */}



      </Switch>

    </div>


  );
}

export default App;



