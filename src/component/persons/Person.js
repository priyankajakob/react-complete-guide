import React from 'react'
import Radium from 'radium'
import './Person.css'
const PersonList = (props)=>{
    const style={
        '@media(min-width:500px)':{
            width:'450px'
        }
    }
    return(
        <div className="Person" style={style}>
            <p onClick={()=>{props.switchNameClick("Pri")}}>I am {props.name} and I am {props.age} years old. </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChange} value={props.name}/>
            <button onClick={props.deleteName}>Delete Me</button>
        </div>
    )
}

export default Radium(PersonList)