import React from 'react';
import { useState } from "react";
import { useEffect } from "react";

function ListOfBooks(){
    const [books, setBooks] = useState([])

    useEffect(()=>{
    fetch('/books')
    .then(res => res.json())
    .then(setBooks);
    }, [])


    return (
    <>
    <h1>List of books to borrow</h1>
    {books.map(book => (
    <div>
    <ul>{book.title}</ul>
    </div>))}
    </>
    )



}
export default ListOfBooks;
