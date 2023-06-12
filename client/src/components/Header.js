import React from "react";
import { Link } from 'react-router-dom';
import '../App.css'
// import AddBook from '../Pages/AddBook'
// import ListOfBooks from "./ListOfBooks";

function Header(){
return(
    <>

    <div className="bookoptions">
     <h2 className="dashboard">Dashboard</h2>
     <Link to='/borrowstatus'><button className= "Btn-book">Issue book to borrower</button></Link>
     <Link to='/books'><button className= "Btn-book">Display current library</button></Link>
     <Link to='/borrowstatus'><button className= "Btn-book">View status of borrowed books</button></Link>
     <Link to='/seeborrowed'><button className= "Btn-book">See borrowed books here &rarr;</button></Link>
     <Link to='/addbook'>
        <button className="Btn-book">Add new book to catalogue</button>
    </Link>

     </div>
    {/* <BookAdd />
    <ListOfBooks /> */}
    </>

)


}

export default Header
