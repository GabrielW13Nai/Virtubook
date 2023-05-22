import React from "react";

export default function Body(){
    const [name, setName] = ('');
    const [author, setAuthor] = ('');
    const [yearPublished, setYearPublished] = ('');


    const bookObject =  {
        name,
        author,
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


    return(
        <>
            <form>
                <label>Book Name</label>
                <input type="text" value={name}onChange={e => setName(e.target.value)}>Name</input><br></br>
                <label>Author</label>
                <input type="text" value={author}onChange={e=> setAuthor(e.target.value)}>Name</input><br></br>
                <label>Year published</label>
                <input type="text" value={yearPublished}onChange={e=> setYearPublished(e.target.value)}>Name</input><br></br>

                <button type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>
        </>
    )
}
