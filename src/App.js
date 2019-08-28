import React, { Component } from 'react';
// import React, { useState } from 'react'; //Used for function based components
import classes from './App.css';
import Person from './Person/Person';


//Below commneted one is class based component example
class App extends Component {
  state = {
    persons: [
      { id: "abdgd", name: "Manzar", age: 30 },
      { id: "kjskjkjd", name: "Hussain", age: 31 },
      { id: "idkjkjd", name: "Siddique", age: 32 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

    // const person = Object.assign({}, this.state.persons[personIndex]); //this is the other way to do
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }

  deletePersonhandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }

  render() {
    let persons = null;
    let btnClasses = '';

    if (this.state.showPersons) {

      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonhandler(index)} />;
          })}

        </div>
      );
      btnClasses = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push( classes.red )
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold )
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I am React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button className={btnClasses}
            onClick={this.togglePersonsHandler}>Toggle Person </button>
          {persons}


        </div>
    );
    // return React.createElement('div', null, 'h1', 'Hi, I\'am React App!!!');
    //hi will be interpretet as text not element
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'am React App!!!'));
    //Adding css
  }
}

// export default App;
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
