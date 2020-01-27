import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Debounce from './debounce';

export class App extends Component {

  render(){
    return (
      <div>
        <Debounce/>
      </div>
    );
  }
}

export default App;
