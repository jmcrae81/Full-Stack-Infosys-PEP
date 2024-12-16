import { useState } from "react";

const StateDemoComponent = () =>{
    let age=45;
    let name="Mercury";
    
    const changeName=(inputname, age1)=>{

    }

    return(
        <>
        <h2>{name} is {age} years old</h2>
        <button onClick={()=>changeName("Morris", 46)}>Change name</button>
        </>
    );
}

export default StateDemoComponent;