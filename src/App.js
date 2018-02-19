import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

  class App extends Component {
    state= {
     username: 'KianSan'
    }

  
  UsernameChangedHandler= (event)=> {
    this.setState({username:event.target.value});


  }
  
//   namepass=(event)=>{
//     this.name= event.target.value
    
//   }

  render() {
    return (
      <div>
        <UserInput 
         changed={this.UsernameChangedHandler}
         currentName={this.state.username} />
        <UserOutput userName={this.state.username}></UserOutput>
        <UserOutput userName="Kian"></UserOutput>
        <button> Pass Username </button>
      </div>
    );
  }
}


export default App;
