import React, { useState } from "react";
// import { FormType, Label, Input, Button } from '../styles'


function Body( {onAdd}){
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [yearPublished, setYearPublished] = useState('');
    // const [errors, setErrors] = useState([]);



    const bookObject =  {
        name,
        author,
        publisher,
        yearPublished
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch('/books',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bookObject)
        })
        .then((r) => r.json())
        .then(book=> onAdd(book))
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* <FormType>*/}
                    <label>Book Name</label>
                    <input
                    type="text"
                    value={bookObject.name}
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
                {/* </FormType> */}

            </form>
        </>
    )
}

export default Body
