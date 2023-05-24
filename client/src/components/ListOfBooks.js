// import React from 'react';
// import { useState } from "react";
import { useEffect } from "react";

function ListOfBooks(){
    // const [books, setBooks] = useState(null)

    useEffect(()=>{
    fetch('/books')
    .then(res =>res.json())
    .then(console.log);
    }, [])

//    books.map(book => {
//     return(
//     <div>
//     <h1>List of books to borrow</h1>
//     <li>{book.title}</li>
//     </div>
//     )})

}
export default ListOfBooks;
