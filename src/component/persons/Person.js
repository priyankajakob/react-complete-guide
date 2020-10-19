import React from 'react'
// import Radium from 'radium'
import styled from 'styled-components'

// import './Person.css'
const StyledDiv = styled.div`
    width:60%;
    margin:16px auto;
    border:1px solid white;
    box-shadow:0 2px 3px lightgrey;
    padding:16px;
    text-align:center;
    @media (min-width:500px){
        width:450px
    }`
const PersonList = (props)=>{
    const style={
        '@media(min-width:500px)':{
            width:'450px'
        }
    }
    return(
        <StyledDiv>
        {/* <div className="Person" style={style}> */}
            <p onClick={()=>{props.switchNameClick("Pri")}}>I am {props.name} and I am {props.age} years old. </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChange} value={props.name}/>
            <button onClick={props.deleteName}>Delete Me</button>
        {/* </div> */}
        </StyledDiv>
    )
}

// export default Radium(PersonList)
export default PersonList