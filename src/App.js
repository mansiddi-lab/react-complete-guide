import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'


class App extends Component {

  state = {
    username: 'super user'
  }

  userNameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    
    return (
      <div className="App">
        
        <UserInput changed={this.userNameChangedHandler}
        newValue={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="Siddique"/>

      </div>
    );
  }
}

export default App;
