import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CharacterForm from './containers/CharacterForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to the 5e Character Creator</h1>
          </header>
          <div className="main-content">
            <Route exact path="/" render={() => <h3>Welcome</h3>} />
            <Route path="/new" component={CharacterForm} />
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
