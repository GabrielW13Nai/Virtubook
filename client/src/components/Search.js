// import React, { useState } from "react";

// function Search( {books} ){
//     const [searchBook, setSearchBook] = useState("")

//     const filtered = books.filter(book => {
//         return(
//             book.title.toLowerCase().includes(searchBook.toLowerCase()) ||
//             book.author.toLowerCase().includes(searchBook.toLowerCase()) ||
//             book.publisher.toLowerCase().includes(searchBook.toLowerCase()) ||
//             book.year_published.toLowerCase().includes(searchBook.toLowerCase())
//         )
//     }
//     )

//     return(
//         <div className="search-ctn">
//             <div className="search-txtbx">
//                 <label htmlFor="Search">Search</label>
//                     <input
//                     className="Search"
//                     type="text"
//                     placeholder="Search for book with keywords..."
//                     onChange={e=> setSearchBook(e.target.value)}/>
//             </div>

//             {filtered.map(book=>{
//                 return(
//                     <section className="bookreturn">
//                         <div>
//                             <img
//                             src={book.img_url}
//                             alt="Not found"
//                             width="400"
//                             height="450"
//                             />

//                         </div>
//                         <div className='book-textstyle'>
//                             <label>Title: {book.title} </label> <br/>
//                             <label>Author: {book.author}</label> <br/>
//                             <label>Publisher:{book.publisher} </label> <br/>
//                             <label>Year Published: {book.year_published} </label> <br/>
//                             <label>Category: {book.category} </label>
//                         </div>
//                     </section>
//                 )
//             })}
//         </div>
//     )
// }

// export default Search
