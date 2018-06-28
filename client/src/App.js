import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CharacterForm from './containers/CharacterForm';

const link = {
  width: '100px',
  padding: '12px',
  // margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/*<h1 className="App-title">Welcome to the 5e Character Creator</h1>*/}
            <div className="navbar">
              <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{
                  background: 'darkblue'
                }}
              >Home</NavLink>
              <NavLink
                to="/new"
                exact
                style={link}
                activeStyle={{
                  background: 'darkblue'
                }}
              >New Character</NavLink>
            </div>
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
