import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

    const Books = () => {
        const [books, setBooks] = useState([])

        useEffect(()=>{

            //async function to make API request
            const fetchAllBooks = async ()=>{
                try {
                    const res = await axios.get("http://localhost:8800/books")
                    console.log(res)
                    setBooks(res.data)
                }catch (err){
                    console.log(err)
                }
            }
            fetchAllBooks()
        },[]) //empty array to just run once

     const handleDelete = async (id) =>{
            try{
                await axios.delete("http://localhost:8800/books/"+id)
                window.location.reload()
            }catch (err){
                console.log(err)
            }
     }

    return(
        <div>
            <h1>Pabs Bookshop</h1>
            <div className="books">
                {books.map((book) => (
                    <div className="book" key={book.id}>
                        {book.cover && <img src={book.cover} alt="" />}
                        <h2>{book.title}</h2>
                        <p>{book.desc}</p>
                        <span>{book.price}</span>
                        <button className="update"><Link to={`/update/${book.id}`}>Update</Link></button>
                        <button className="delete" onClick={()=>handleDelete(book.id)}>Delete</button>
                    </div>
                ))}
            </div>
            <button className="formButton"><Link to={"/add"}>Add new book</Link></button>
        </div>
    )
}

export default Books;