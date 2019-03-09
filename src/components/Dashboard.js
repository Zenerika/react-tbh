import React, { Component } from 'react'
import Tab from './Tab'
import Chores from '../styles/img/chores-wh.png'
import Bills from "../styles/img/bills-wh.png"
import Groceries from "../styles/img/groceries-wh.png"
import Medical from "../styles/img/medical-wh.png"
import Calendar from "../styles/img/calendar-wh.png"
import Fitness from "../styles/img/fitness-wh.png"

class Dashboard extends Component {
  render() {
    let {activeTab, changeTab} = this.props
    return (
      <div>
        <div class="tbh-cards">

          <div class="tbh-row">
            <div class="tbh-card-item"><h1>Chores</h1>
              <a href="chores.html"><img src={Chores} width="80px"/></a>
            </div>
            <div class="tbh-card-item"><h1>Bills</h1>
              <a href="underconstruction.html"><img src={Bills} width="80px"/></a>
            </div>
            <div class="tbh-card-item"><h1>Groceries</h1>
              <a href="underconstruction.html"><img src={Groceries} width="80px"/></a>
            </div>
          </div>

          <div class="tbh-row">
            <div class="tbh-card-item"><h1>Medical</h1>
              <a href="underconstruction.html"><img src={Medical} width="80px"/></a>
            </div>
            <div class="tbh-card-item"><h1>Calendar</h1>
              <a href="underconstruction.html"><img src={Calendar} width="80px"/></a>
            </div>
            <div class="tbh-card-item"><h1>Fitness</h1>
              <a href="underconstruction.html"><img src={Fitness} width="80px"/></a>
            </div>
          </div>

          </div>
        
      </div>
    )
  }
}

export default Dashboard