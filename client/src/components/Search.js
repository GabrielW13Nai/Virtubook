// import React, { useState } from "react";
// import SearchList from "./SearchList";
// import Scroll from './Scroll';

// function Search( {books} ){
//     const [searchBook, setSearchBook] = useState("");
//     const [show, setShow] = useState(false);



//     const searchParams = Object.keys(Object.assign({}, ...searchBook))
//     const filtered = books.filter(book => {
//             book.title.toString().toLowerCase().includes(searchBook.toLowerCase()) ||
//             book.author.toString().toLowerCase().includes(searchBook.toLowerCase()) ||
//             book.publisher.toString().toLowerCase().includes(searchBook.toLowerCase())
//             // book.year_published.includes(searchBook)
//     });




//     function ReturnSearch(){
//         if (show){
//         <Scroll>
//             <SearchList filtered={filtered} />
//         </Scroll>
//         }

//     }

//     return(
//         <div className="search-ctn">
//             <div className="search-txtbx">
//                 <label htmlFor="Search">Search</label>
//                     <input
//                     className="textbox-text"
//                     type="text"
//                     placeholder="Search for book with keywords..."
//                     onChange={handleChange}
//                     />
//             </div>
//              {ReturnSearch()}

//         </div>
//     )
// }

// export default Search
