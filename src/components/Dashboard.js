import React, { Component } from 'react'
import Chores from '../styles/img/chores-wh.png'
import Bills from "../styles/img/bills-wh.png"
import Groceries from "../styles/img/groceries-wh.png"
import Medical from "../styles/img/medical-wh.png"
import Calendar from "../styles/img/calendar-wh.png"
import Fitness from "../styles/img/fitness-wh.png"
import { Link, NavLink } from 'react-router-dom'

class Dashboard extends Component {
  
  render() {
    let {changeTab} = this.props
    return (
      <div>
        <div className="tbh-cards">

          <div className="tbh-row">

            <div className="tbh-card-item"><h1>Chores</h1>
              <Link to="/chores"><img src={Chores} width="80px" alt="chores"/></Link>
            </div>

            <div className="tbh-card-item" onClick={() => changeTab(2)}><h1>Bills</h1>
              <a><img src={Bills} width="80px" alt="bills"/></a>
            </div>

            <div className="tbh-card-item" onClick={() => changeTab(3)}><h1>Groceries</h1>
              <a><img src={Groceries} width="80px" alt="groceries"/></a>
            </div>

          </div>

          <div className="tbh-row">
            <div className="tbh-card-item" onClick={() => changeTab(4)}><h1>Medical</h1>
              <a><img src={Medical} width="80px" alt="medical"/></a>
            </div>
            <div className="tbh-card-item" onClick={() => changeTab(5)}><h1>Calendar</h1>
              <a><img src={Calendar} width="80px" alt="calendar"/></a>
            </div>
            <div className="tbh-card-item" onClick={() => changeTab(6)}><h1>Fitness</h1>
              <a><img src={Fitness} width="80px" alt="fitness"/></a>
            </div>
          </div>

          </div>
        
      </div>
    )
  }
}

export default Dashboard