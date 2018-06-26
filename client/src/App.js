import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterForm from './components/CharacterForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the 5e Character Creator</h1>
        </header>
        <div className="main-content">
          <CharacterForm />
        </div>
      </div>
    );
  }
}

export default App;
