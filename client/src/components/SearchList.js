import React from "react";

function SearchList( {filtered}){
    const searchfilter = filtered.map(book=> {
            return(
                <section className="bookreturn">
                     <div>
                         <img
                        src={book.img_url}
                         alt="Not found"
                        width="400"
                        height="450"
                         />

                    </div>
                    <div className='book-textstyle'>
                        <label>Title: {book.title} </label> <br/>
                        <label>Author: {book.author}</label> <br/>
                        <label>Publisher:{book.publisher} </label> <br/>
                        <label>Year Published: {book.year_published} </label> <br/>
                        <label>Category: {book.category} </label>
                    </div>
                </section>
                )})

        return(
            <div>
                {searchfilter}
            </div>
        )

        }

export default SearchList;
