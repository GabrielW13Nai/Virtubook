import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import BookRemove from './BookRemove';

function ListOfBooks(){
    const [books, setBooks] = useState([])
    const [filter, setFilter] = useState("")
    const [filtered, setFiltered] = useState("")

    useEffect(()=>{
    fetch('/books')
    .then(res => res.json())
    .then(book=>{
        setBooks(book);
    });
    }, [])

    useEffect(()=>{
        const bookFilter = books.filter((book) =>{
            return Object.values(book).join("").toLowerCase().includes(filter.toLowerCase())
            })
            setFiltered(bookFilter)
    },[books, filter]);

    return (
    <>
    <div className="search-ctn">
        <div className="search-txtbx">
            <input
            className="textbox-text"
            type="text"
            placeholder="Search for book with keywords..."
            onChange={e=> setFilter (e.target.value) }
            />
        </div>
    </div>
    <Link to="/"><button className="Btn-book">Back to Dashboard</button></Link>

    <h1>Here are some books to choose from:</h1>

    {filtered.length === 0?
    books.map(book => (
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
    ))
   : filtered.map(
        (book => (
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
            </section>)))}
    </>

    )}


export default ListOfBooks;


