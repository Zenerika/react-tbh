import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Chores.css'

import CreateTodo from './CreateTodo'
import EditTodo from './EditTodo'
import TodosList from './TodosList'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
           <div className="tabs is-centered is-medium">
                <ul>
                    <li>
                    <a>
                        <span className="icon is-small"><i className="fas fa-clipboard-list" style={{color: 'white'}} aria-hidden="true"></i></span>
                        <Link to="/" className="nav-link">Chores</Link>
                    </a>
                    </li>
                    <li>
                    <a>
                        <span className="icon is-small"><i className="fas fa-highlighter" style={{color: 'white'}} aria-hidden="true"></i></span>
                        <Link to="/create" className="nav-link">Assign a Chore</Link>
                    </a>
                    </li>
                </ul>
            </div>

          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;