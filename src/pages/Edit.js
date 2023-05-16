import {useState} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

function Update(){

    const [book, setBook] = useState({
        title: "",
        desc: "",
        price:"",
        cover:"",
    });

    const navigate = useNavigate()
    const location = useLocation()

    //console.log(location.pathname.split("/")[2])

    const bookId = location.pathname.split("/")[2]

    const handleChange = (e) => {
        setBook((prev) => ({...prev, [e.target.name]: e.target.value}));
        console.log(book)
    }

    const handleClick = async e => {
        //prevent refresh by default
        e.preventDefault()
        try{
            await axios.put("http://localhost:8800/books/"+bookId, book)
            navigate("/")
        }catch (err){
            console.log(err)
        }
    }

    return(
        <div className="form">
            <h1>Update book</h1>
            <input type="text" placeholder="title" onChange={handleChange} name="title"/>
            <input type="text" placeholder="desc" onChange={handleChange} name="desc"/>
            <input type="text" placeholder="price" onChange={handleChange} name="price"/>
            <input type="text" placeholder="cover" onChange={handleChange} name="cover"/>
            <button onClick={handleClick} className="formButton">Update</button>
        </div>
    )
}

export default Update;