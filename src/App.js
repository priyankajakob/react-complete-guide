import React,{Component} from 'react';
import './App.css';
import Person from './component/persons/Person'

class App extends Component {
    state={
      persons:[
        {name:"Max",age:29},
        {name:"Manu",age:30},
        {name:"Meen",age:50},
        {name:"Priyanka",age:20 }
      ],
      showNames:true
    }

    // handleSwitchName=(newName)=>{
    //   console.log("clicked")
    //   //DONT DO THIS, DO NOT MUTATE STATE DIRECTLY. REACT DOESN"T RENDER THIS
    //   // this.state.persons=[
    //   //   {name:"Maxmillian",age:29},
    //   //   {name:"ManuJosh",age:30},
    //   //   {name:"MeenaKumari",age:50}
    //   // ]
    //   this.setState({
    //     persons:[
    //       {name:"Maxmillian",age:29},
    //       {name:"ManuJosh",age:30},
    //       {name:"MeenaKumari",age:50},
    //       {name:newName,age:20 }
    //     ]
    //   })
    // }

    handleNameChange=(event)=>{
      this.setState({
        persons:[
          {name:"Maxmillian",age:29},
          {name:event.target.value,age:30},
          {name:"MeenaKumari",age:50},
          {name:"Priyanka",age:20 }
        ]
      })
    }

  toggleShowNames=()=>{
    const doesNames = this.state.showNames
    this.setState({showNames:!doesNames})
  }
  handleDeleteName=(id)=>{
    const arr = [].concat(this.state.persons)
    arr.splice(id,1)
    this.setState({
      persons : [...arr]
    })
  }

  render(){
    const style = {
      backgroundColor:'white',
      border:'1px solid black',
      cursor:'pointer',
      font:'inherit',
      padding:'5px'
    }

    let persons=null
    if(this.state.showNames){
      persons=
      <div>
        {this.state.persons.map((person,index)=>{
          return(
            <Person 
              key={index}
              name ={person.name}
              age = {person.age}
              deleteName={()=>this.handleDeleteName(index)}
              nameChange={this.handleNameChange}
            />
          )
        })}
      </div>
    }

    return (
      <div className="App">
        <h1>This is my React App</h1>
        <p>Person Details</p>
        {/* <button onClick={this.handleSwitchName}>Switch Name</button> */}
        {/* <button style={style} onClick={this.handleSwitchName.bind(this,'Priyanka!')}>Switch Name</button> */}
        <button style={style} onClick={this.toggleShowNames}>Hide/Show Names</button>
        {persons} 
      </div>
    );
  }
  

  //Syntax using React Create Elements -- difficult when too many components come into picture
  // return React.createElement('div',{className:"App"},
  //               React.createElement('h1',null,"Hello"),
  //               React.createElement('h2',null,"Welcome"))
}

export default App;
