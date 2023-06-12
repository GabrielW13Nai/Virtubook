import React from "react";
import { IconButton } from '@mui/material';



function BookRemove( {bookremove, setBookRemove, book} ) {

    function handleDelete(id){
        fetch(`books/${id}`,{
        method: "DELETE",})
        .then(res => res.json())
        .then(() => {
        const newBooks = bookremove.filter(book => book.id !== id)
        setBookRemove(newBooks)})
        window.location.reload(true);
    }
            return(
            <>
            <IconButton
            aria-label='Delete'
            onClick ={() => handleDelete(book.id)}
            className='remove-button'
            > Remove from catalogue
            </IconButton>

        </>)
    }

export default BookRemove;
