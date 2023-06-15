import React from "react";
import { Link } from 'react-router-dom';
import '../App.css'
// import AddBook from '../Pages/AddBook'
// import ListOfBooks from "./ListOfBooks";

function Header(){
return(
    <>

    <div className="bookoptions">
     <h2 className="dashboard-title">Dashboard</h2>
     <Link to='/borrowstatus'><button className= "Btn-books">Issue book to borrower</button></Link><br></br>
     <Link to='/books'><button className= "Btn-books">Display current library</button></Link><br></br>
     <Link to='/borrowstatus'><button className= "Btn-books">View status of borrowers here</button></Link><br></br>
     <Link to='/seeborrowed'><button className= "Btn-books">See borrowed books here &rarr;</button></Link><br></br>
     <Link to='/addbook'>
        <button className="Btn-books">Add new book to catalogue</button>
    </Link>

     </div>
    {/* <BookAdd />
    <ListOfBooks /> */}
    </>

)


}

export default Header
