import {useState} from "react";

const ToDoList = () => {
    const[value, setValue] = useState("");
    const[prevList,setList]=useState([]);
    const submitHandler = (e) => {
        e.preventDefault();
        setList((prevList)=>{return[...prevList, value]})
        console.log(value)
    }
    return(
        <div>
            <h3>To Do List</h3>
            <form onSubmit={submitHandler}>
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
                <button>Add</button>
            </form>
            <h3>Total Elements</h3>
        </div>
    );
}
export default ToDoList;