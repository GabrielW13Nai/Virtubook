import React from "react";
import { Link } from 'react-router-dom';
import '../App.css'
// import BookAdd from "./BookAdd";
// import ListOfBooks from "./ListOfBooks";

function Header(){
return(
    <>
    <Link to='/bookadd'>
        <button className="Add-book">Add book</button>
        </Link>
    <Link to='/books'>Show books</Link>
    {/* <BookAdd />
    <ListOfBooks /> */}
    </>

)


}

export default Header
