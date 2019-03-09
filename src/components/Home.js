import React, { Component } from 'react'
import Navbar from './Navbar.js'
import Dashboard from './Dashboard'
import Chores from './Chores'
import Bills from './Bills'
import Groceries from './Groceries'

import '../styles/Home.css'

class Home extends Component {
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
    console.log(this.state)
    return (
      <div>
        <Navbar/>
        {this.state.activeTab === 0 ? <Dashboard activeTab={this.state.activeTab} 
                changeTab={this.changeTab}/> : null}
        {this.state.activeTab === 1 ? <Chores /> : null}
        {this.state.activeTab === 2 ? <Bills /> : null}
        {this.state.activeTab === 3 ? <Groceries /> : null}

    </div>
    )
  }
}

export default Home
