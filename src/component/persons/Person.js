import React from 'react'
import './Person.css'
const PersonList = (props)=>{
    return(
        <div className="Person">
            <p onClick={()=>{props.switchNameClick("Pri")}}>I am {props.name} and I am {props.age} years old. </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChange}/>
        </div>
    )
}

export default PersonList