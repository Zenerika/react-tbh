import React, { Component } from 'react';
import '../styles/App.css';
import Home from './Home.js'
import 'bulma'
import '../styles/custom.sass'
// import { BrowserRouster as Router } from 'react-router-dom';
// import Route from 'react-router-dom/Route'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
