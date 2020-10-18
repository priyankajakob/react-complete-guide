import React,{useState} from 'react';
import './App.css';
import Person from './component/persons/List'

const App = props => {
    const [personsState,personsChangeState]=useState({
        persons:[
            {name:"Max",age:29},
            {name:"Manu",age:30},
            {name:"Meena",age:50}
          ]
        })

    const handleSwitchName=()=>{
      console.log("clicked")
      personsChangeState({
        persons:[
          {name:"Maxmillian",age:29},
          {name:"ManuJosh",age:30},
          {name:"MeenaKumari",age:50}
        ]
      })
    }
    console.log(personsState)

    return (
      <div className="App">
        <h1>This is my React App</h1>
        <p>Person Details</p>
        <button onClick={handleSwitchName}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies are Singing, Dancing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}><h5>I love cooking</h5></Person>
      </div>
    );

}

export default App;
