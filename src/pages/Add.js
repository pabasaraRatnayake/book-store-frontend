import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Add(){

    const [book, setBook] = useState({
        title: "",
        desc: "",
        price:"",
        cover:"",
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setBook((prev) => ({...prev, [e.target.name]: e.target.value}));
        console.log(book)
    }

    const handleClick = async e => {
        //prevent refresh by default
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/books", book)
            navigate("/")
        }catch (err){
            console.log(err)
        }
    }

    return(
        <div className="form">
            <h1>Add new book</h1>
            <input type="text" placeholder="title" onChange={handleChange} name="title"/>
            <input type="text" placeholder="desc" onChange={handleChange} name="desc"/>
            <input type="text" placeholder="price" onChange={handleChange} name="price"/>
            <input type="text" placeholder="cover" onChange={handleChange} name="cover"/>
            <button onClick={handleClick} className="formButton">Add</button>
        </div>
    )
}

export default Add;