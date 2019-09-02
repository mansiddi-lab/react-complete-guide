import React, { Component } from 'react';
// import React, { useState } from 'react'; //Used for function based components
import classes from './App.css';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass'
import Aux from '../hoc/Auxilary';
import AuthContext from '../context/auth-context';


//Below commneted one is class based component example
class App extends Component {

  constructor(props) {
    console.log('[App.js] constructor', props);
    super(props);
    this.state = {
      persons: [
        { id: "abdgd", name: "Manzar", age: 30 },
        { id: "kjskjkjd", name: "Hussain", age: 31 },
        { id: "idkjkjd", name: "Siddique", age: 32 }
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextstate) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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

    // Not the best practice to update the state
    // this.setState({ persons: persons });

    //Best way to update state
    this.setState((previousState, props) => {
      return {
        persons: persons,
        changeCounter: previousState.changeCounter + 1
      }
    });

    // const person = Object.assign({}, this.state.persons[personIndex]); //this is the other way to do
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
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
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {

      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonhandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated} />
      );
    }

    return (
      <Aux>

        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}> Remove Cockpit</button>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
          {this.state.showCockpit ?
            <Cockpit title={this.props.appTitle}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}
            /> : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', null, 'h1', 'Hi, I\'am React App!!!');
    //hi will be interpretet as text not element
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'am React App!!!'));
    //Adding css
  }
}

export default withClass(App, classes.App);