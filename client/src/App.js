// import logo from './logo.svg';
import React from 'react';
import './App.css';
import BookList from './Pages/BookList';
import AddBook from './Pages/AddBook';
import Home from './Pages/Home';
import { Switch, Route } from 'react-router-dom';
// import Search from './components/Search';

function App() {


  return (
    <div className="App">
      <div className='page-container'>
      <div>
      <p> <span className='shade'>Virtubook</span></p>
      </div>
      <div className='dashboard-ctn'>
        <div className='routes-ctn'>
          <Switch>
            <Route exact path='/'> <Home /> </Route>
            <Route exact path='/addbook'> <AddBook /> </Route>
            <Route exact path='/books'><BookList /></Route>
            <Route exact path='/bookedit'></Route>
  {/* <Route path='/bookdisplay' element={<ListOfBooks />} />
  <Route path='/bookview' element={<ListOfBooks />} />
  <Route path='/bookupdate' element={<ListOfBooks />} /> */}
            </Switch>
      </div>
      </div>
      {/* <div className='search'>
        <Search />

      </div> */}
      </div>
    </div>


  );
}

export default App;



