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

    handleSwitchName=(newName)=>{
      console.log("clicked")
      //DONT DO THIS, DO NOT MUTATE STATE DIRECTLY. REACT DOESN"T RENDER THIS
      // this.state.persons=[
      //   {name:"Maxmillian",age:29},
      //   {name:"ManuJosh",age:30},
      //   {name:"MeenaKumari",age:50}
      // ]
      this.setState({
        persons:[
          {name:"Maxmillian",age:29},
          {name:"ManuJosh",age:30},
          {name:"MeenaKumari",age:50},
          {name:newName,age:20 }
        ]
      })
    }

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
  render(){
    const style = {
      backgroundColor:'white',
      border:'1px solid black',
      cursor:'pointer',
      font:'inherit',
      padding:'5px'
    }

    return (
      <div className="App">
        <h1>This is my React App</h1>
        <p>Person Details</p>
        {/* <button onClick={this.handleSwitchName}>Switch Name</button> */}
        {/* <button style={style} onClick={this.handleSwitchName.bind(this,'Priyanka!')}>Switch Name</button> */}
        <button style={style} onClick={this.toggleShowNames}>Hide/Show Names</button>
        {this.state.showNames?
         <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name}
            nameChange={this.handleNameChange}
            switchNameClick = {this.handleSwitchName} 
            age={this.state.persons[1].age}>My hobbies are Singing, Dancing</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}>
              <h5>I love cooking</h5>
          </Person>
          <Person 
            name={this.state.persons[3].name} 
            age={this.state.persons[3].age}>
          </Person>
       </div>:null}
       
       
      </div>
    );
  }
  

  //Syntax using React Create Elements -- difficult when too many components come into picture
  // return React.createElement('div',{className:"App"},
  //               React.createElement('h1',null,"Hello"),
  //               React.createElement('h2',null,"Welcome"))
}

export default App;
