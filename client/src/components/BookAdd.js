import React, { useState } from "react";
// import styled from "styled-components";
import FormType from "../styles/FormType";



function BookAdd(){
    const [title, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [yearPublished, setYearPublished] = useState('');
    // const [errors, setErrors] = useState([]);



    const bookObject =  {
        title,
        author,
        publisher,
        yearPublished
    }

    function handleSubmit(){
        fetch('/books',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bookObject)
        })
        .then((r) => r.json())
        .then(book=> console.log(book))
    }


    return (
        <>
                <FormType onSubmit={handleSubmit}>
                    <label>Book Title</label>
                    <input
                    type="text"
                    value={bookObject.title}
                    onChange={e => setName(e.target.value)}/><br></br>

                    <label>Author</label>
                    <input
                    type="text"
                    value={bookObject.author}
                    onChange={e => setAuthor(e.target.value)}/><br></br>

                    <label>Publisher</label>
                    <input type="text"
                    value={bookObject.publisher}
                    onChange={e => setPublisher(e.target.value)}/><br></br>

                    <label>Year published</label>
                    <input type="text"
                    value={bookObject.yearPublished}
                    onChange={e => setYearPublished(e.target.value)}/><br></br>

                    <button type="submit" >Submit</button>
                </FormType>
        </>
    )
}

export default BookAdd
