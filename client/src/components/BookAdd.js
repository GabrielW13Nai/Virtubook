import React, { useState } from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
// import FormType from "../styles/FormType";



function BookAdd(){
    const options = [
        {value: 'Action', text: 'Action'},
        {value: 'Science-Fiction', text: 'Science-Fiction'},
        {value: 'Fantasy', text: 'Fantasy'},
        {value: 'Animation', text: 'Animation'},
        {value: 'Drama', text: 'Drama'}
    ]

    const [title, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [year_published, setYearPublished] = useState('');
    const [category, setCategory] = useState(options[0].value);
    const [image_url, setImage] = useState('');
    // const [errors, setErrors] = useState([]);



    const bookObject =  {
        title,
        author,
        publisher,
        year_published,
        category,
        image_url
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
                <form id="addbook" onSubmit={handleSubmit}>
                    <label>Book Title</label>
                    <input
                    type="text"
                    className="textbox-text"
                    placeholder="Title"
                    value={bookObject.title}
                    onChange={e => setName(e.target.value)}/><br></br>

                    <label>Author</label>
                    <input
                    type="text"
                    className="textbox-text"
                    placeholder="Book author"
                    value={bookObject.author}
                    onChange={e => setAuthor(e.target.value)}/><br></br>

                    <label>Publisher</label>
                    <input type="text"
                    className="textbox-text"
                    placeholder="Book Publisher"
                    value={bookObject.publisher}
                    onChange={e => setPublisher(e.target.value)}/><br></br>

                    <label>Year published</label>
                    <input type="text"
                    className="textbox-text"
                    value={bookObject.year_published}
                    placeholder="Year"
                    onChange={e => setYearPublished(e.target.value)}/><br></br>

                    <label>Category</label>
                    <select className="textbox-text" value={bookObject.category} onChange={e => setCategory(e.target.value)}>
                        {options.map(option => (
                        <option key={option.value} value={option.value}>{option.text} </option>
                     ))}
                    </select> <br />

                    <label>Image</label>
                    <input type="text"
                    className="textbox-text"
                    placeholder="Add image url"
                    value={bookObject.image_url}
                    onChange={e => setImage(e.target.value)}/><br></br>

                    <button type="submit" className="Btn-book" >Add book</button>
                    <Link to="/"><button className="Btn-book">Back</button></Link>

                </form>
        </>
    )
}

export default BookAdd
