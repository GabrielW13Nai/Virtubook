import Header from "../components/Header"
import Search from "../components/Search";
import { useState, useEffect } from "react";


function Home(){

    const [books, setBooks] = useState([])

    useEffect(()=>{
    fetch('/books')
    .then(res => res.json())
    .then(book=>{
        setBooks(book);
    });
    }, [])
    return(
        <>
        <div>
            <Search books={books}/>
        </div>
        {/* <h3 className="title">Welcome to Virtubook</h3>
        <h4 className="title">Please select one of the following to proceed</h4> */}
        <Header />
        </>
    )
}

export default Home;
