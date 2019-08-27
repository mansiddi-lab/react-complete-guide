import React, { Component } from 'react';
// import React, { useState } from 'react'; //Used for function based components
import './App.css';
import Person from './Person/Person';




//Below commneted one is class based component example
class App extends Component {
  state = {
    persons: [
      { name:"Manzar", age:30 },
      { name:"Hussain", age:31 },
      { name:"Siddique", age:32 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // DON"T DO THIS, we should mutate, this.state.persons[0].name = "Manzar H";
    this.setState({
      persons: [
        { name:newName, age:30 },
        { name:"Hussain", age:31 },
        { name:"Siddique", age:32 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name:"Manzar", age:30 },
        { name:event.target.value, age:29 },
        { name:"Siddique", age:32 }
      ]
    })

  }

  render() {
    const styleConst = {
      backGroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding:  '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p>This is really working!</p>
        <button style={styleConst}
        onClick={() => this.switchNameHandler('Manzar!!!!!!')} >Swich Name </button>
        {/*<button onClick={this.switchNameHandler.bind(this, "Manzar!!!!!")} >Swich Name </button>*/}
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>

        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this, "Manzar...!")}
        changed={this.nameChangedHandler}> My Hobbies: Racing
        </Person>

        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>

      </div>
    );
    // return React.createElement('div', null, 'h1', 'Hi, I\'am React App!!!');
                                          //hi will be interpretet as text not element
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'am React App!!!'));
                                        //Adding css
  }
}

export default App;

//Function based componet example
/*const app = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name:"Manzar", age:30 },
      { name:"Hussain", age:31 },
      { name:"Siddique", age:32 }
      ],
      otherState: 'some other value'
  });

  // console.table(personState);
  console.log(personState);
  // Like this we can maintain other state instead of merging the value
  const [otherState, setOtherState] = useState("some other value");



  const switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // DON"T DO THIS, we should mutate, this.state.persons[0].name = "Manzar H";
    setPersonState({
      persons: [
      { name:newName, age:30 },
      { name:"Hussain", age:31 },
      { name:"Siddique", age:32 }
      ],
      otherState: personState.otherState
    })
  }

    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p>This is really working!</p>
        <button onClick={() => switchNameHandler('Manzar!!')} >Swich Name </button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age} click={switchNameHandler.bind(this, "Manzar...!")}> My Hobbies: Racing</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
  
}

export default app;*/
