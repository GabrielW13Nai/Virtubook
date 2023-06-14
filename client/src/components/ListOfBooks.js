import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import BookRemove from './BookRemove';


function ListOfBooks(){
    const [books, setBooks] = useState([])


    useEffect(()=>{
    fetch('/books')
    .then(res => res.json())
    .then(book=>{
        setBooks(book);
    });
    }, [])


    return (
    <>
    <Link to="/"><button className="Btn-book">Back to Dashboard</button></Link>

    <h1>Here are some books to choose from:</h1>

    {books.map(book => (
        <>
    <section className='book-details'>
        <div className='bookimage'>
            <section className='image'>
                <img
                    src={book.image_url}
                    alt='Not  found'
                    width="400"
                    height="450"
                />
            </section>
        </div>
        <div className='book-textstyle'>
         <label>Title: {book.title} </label> <br/>
         <label>Author: {book.author}</label> <br/>
         <label>Publisher:{book.publisher} </label> <br/>
         <label>Year Published: {book.year_published} </label> <br/>
         <label>Category: {book.category} </label>
        </div>
        <div>
        </div>
        <BookRemove bookremove={books} setBookRemove={setBooks} book={book} />
    </section>
    </>
    ))}


    </>
    )



}
export default ListOfBooks;
