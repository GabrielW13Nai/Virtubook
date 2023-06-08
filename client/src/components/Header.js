import React from "react";
import { Link } from 'react-router-dom';
import '../App.css'
// import BookAdd from "./BookAdd";
// import ListOfBooks from "./ListOfBooks";

function Header(){
return(
    <>

    <Link to='/borrowstatus'><button className= "Btn-book">Borrow book</button></Link>
    <Link to='/bookdisplay'><button className= "Btn-book">Display current library</button></Link>
    <Link to='/bookremove'><button className= "Btn-book">Remove book from catalogue</button></Link>
    <Link to='/borrowstatus'><button className= "Btn-book">View status of borrowed books</button></Link>
    <Link to='/borrowstatus'><button className= "Btn-book">See borrowed books here &rarr;</button></Link>
    <Link to='/bookadd'>
        <button className="Btn-book">Add new book to catalogue</button>
        </Link>


    {/* <BookAdd />
    <ListOfBooks /> */}
    </>

)


}

export default Header
