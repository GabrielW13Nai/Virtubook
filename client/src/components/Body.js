import React, { useState } from "react";
// import { FormType, Label, Input, Button } from '../styles'


function Body(){
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [yearPublished, setYearPublished] = useState('');


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
    }


    return (
        <>
            <form>
                {/* <FormType> */}
                    <label>Book Name</label>
                    <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}/><br></br>

                    <label>Author</label>
                    <input
                    type="text"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}/><br></br>

                    <label>Publisher</label>
                    <input type="text"
                    value={publisher}
                    onChange={e => setPublisher(e.target.value)}/><br></br>

                    <label>Year published</label>
                    <input type="text"
                    value={yearPublished}
                    onChange={e => setYearPublished(e.target.value)}/><br></br>

                    <button type="submit" onSubmit={handleSubmit}>Submit</button>
                {/* </FormType> */}

            </form>
        </>
    )
}

export default Body
