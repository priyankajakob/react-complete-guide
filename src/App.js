import React,{Component} from 'react';
import './App.css';
import Person from './component/persons/Person'

class App extends Component {
    state={
      persons:[
        {id:'11',name:"Max",age:29},
        {id:'22',name:"Manu",age:30},
        {id:'33',name:"Meen",age:50},
        {id:'44',name:"Priyanka",age:20 }
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

    handleNameChange=(event,id)=>{
      // const arr = [...this.state.persons]
      const personIndex=this.state.persons.findIndex(p=>p.id==id)
      
      // arr[personIndex].name=event.target.value

      const person = {...this.state.persons[personIndex]}
      person.name=event.target.value

      const persons = [...this.state.persons]
      persons[personIndex]=person

      this.setState({
        persons:persons
      })
    }

  toggleShowNames=()=>{
    const doesNames = this.state.showNames
    this.setState({showNames:!doesNames})
  }
  handleDeleteName=(index)=>{
    
    const arr = [].concat(this.state.persons)
    arr.splice(index,1)
    //From the docs arr.slice([begin[, end]]), If begin is undefined, slice begins from index 0.`
    this.setState({
      persons : [].concat(arr)
    })
  }

  render(){
    console.log("render called")
    const style = {
      backgroundColor:'green',
      color:'white',
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
             id={person.id}
              key={person.id}
              name ={person.name}
              age = {person.age}
              deleteName={()=>this.handleDeleteName(index)}
              nameChange={(event)=>this.handleNameChange(event,person.id)}
            />
          )
        })}
      </div>
      style.backgroundColor='red'
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
