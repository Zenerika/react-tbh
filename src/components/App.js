import React, { Component } from 'react';
import '../styles/App.css';
import 'bulma'
import '../styles/custom.sass'

// Components
import Home from './Home.js'
import Dashboard from './Dashboard'
import Chores from './Chores'
import Bills from './Bills'
import Groceries from './Groceries'

// import { BrowserRouster as Router } from 'react-router-dom';
// import Route from 'react-router-dom/Route'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      activeTab: 0
    }
    this.changeTab = this.changeTab.bind(this)
  }
  
  changeTab(newTab) {
    this.setState({activeTab: newTab})
  }

  render() {
    return (
      <div>
        <Home />
        <Dashboard activeTab={this.state.activeTab} 
                changeTab={this.changeTab}/>
          {this.state.activeTab === 0 ? <Chores /> : null}
          {this.state.activeTab === 1 ? <Bills /> : null}
          {this.state.activeTab === 2 ? <Groceries /> : null}

      </div>
    );
  }
}

export default App;
