import React, { useState } from "react";
import SearchList from "./SearchList";
import Scroll from './Scroll';

function Search( {books} ){
    const [searchBook, setSearchBook] = useState("");
    const [show, setShow] = useState(false);

    const filtered = books.filter(book => {
        return (
            book.title.toLowerCase().includes(searchBook.toLowerCase()) ||
            book.author.toLowerCase().includes(searchBook.toLowerCase()) ||
            book.publisher.toLowerCase().includes(searchBook.toLowerCase())
            // book.year_published.includes(searchBook)
        );
    })


    function handleChange(e){
        setSearchBook(e.target.value);
        if(e.target.value===""){
            setShow(false);}
            else {
                setShow(true)};
        }
    function ReturnSearch(){
        if (show){
        <Scroll>
            <SearchList filtered={filtered} />
        </Scroll>
        }

    }

    return(
        <div className="search-ctn">
            <div className="search-txtbx">
                <label htmlFor="Search">Search</label>
                    <input
                    className="Search"
                    type="text"
                    placeholder="Search for book with keywords..."
                    onChange={handleChange}/>
            </div>
            <div>
                {ReturnSearch()}
            </div>

        </div>
    )
}

export default Search
