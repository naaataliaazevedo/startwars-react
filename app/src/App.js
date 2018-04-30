import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Initial from './containers/Initial';
import Characters from "./containers/Characters";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Initial} />
          <Route path="/characters" component={Characters} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
