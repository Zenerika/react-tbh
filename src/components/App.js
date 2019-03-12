import React, { Component } from 'react';
import '../styles/App.css';
import 'bulma'
import '../styles/custom.sass'
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Home from './Home.js'
import Chores from './Chores.js'
import Bills from './Bills.js'
import Groceries from './Groceries.js'
import Medical from './Medical.js'
import Calendar from './Calendar.js'
import Fitness from './Fitness.js'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Home />
          <Route exact path='/' component={Home} />
          <Route path='/chores' component={Chores} />
          <Route path='/bills' component={Bills} />
          <Route path='/groceries' component={Groceries} />
          <Route path='/medical' component={Medical} />
          <Route path='/calendar' component={Calendar} />
          <Route path='/fitness' component={Fitness} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
