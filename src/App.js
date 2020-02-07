import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Debounce from './debounce';
import Throttle from './throttle';


export class App extends Component {

  render(){
    return (
      <div style={{backgroundColor:"grey"}}>
        <Debounce/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Throttle/>
      </div>
    );
  }
}

export default App;
