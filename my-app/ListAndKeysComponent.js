import { useState, useEffect } from "react";
import CommentDisplayComponent from "./CommentDisplayComponent";

const ListAndKeysComponent = () => {
    const[comments,setComments] = useState([
        { "id": 1, "name": "id labore ex et quam laborum", "email": "Eliseo@gardner.biz"},
        { "id": 2, "name": "quo vero reiciendis velit similique earum", "email": "Jayne_Kuhic@sydney.com"},
        { "id": 3, "name": "odio adipisci rerum aut animi", "email": "Nikita@garfield.biz"}
    ])

    const handleDelete = (id) => {
        const newComment = comments.filter(comment=>comment.id!==id)
        setComments(newComment)   
    }
    const[name, setName] = useState("MyName");

    useEffect(()=>{
        console.log("Use Effect called....")
    },[name])

    return(
        <>
        <h2>List and Keys</h2>
        <CommentDisplayComponent comments={comments} handleDelete={handleDelete}/>
        <button onClick={()=>setName("NewName")}>Change NewName</button>
        </>
    )

}

export default ListAndKeysComponent;