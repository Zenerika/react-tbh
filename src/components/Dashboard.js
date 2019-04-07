import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Images
import Chores from '../styles/img/chores-wh.png'
import Bills from "../styles/img/bills-wh.png"
import Groceries from "../styles/img/groceries-wh.png"
import Medical from "../styles/img/medical-wh.png"
import Calendar from "../styles/img/calendar-wh.png"
import Fitness from "../styles/img/fitness-wh.png"
import Todo from '../styles/img/todo-wh.png'
import Auto from '../styles/img/auto-wh.png'
import Pets from '../styles/img/dog-wh.png'

class Dashboard extends Component {
  
  render() {
    return (
      <div>
      <div className="tbh-cards">
        <div className="tbh-row">
          <div className="tbh-card-item">To-Do List
            <Link to="/todo"><img src={Todo} width="80px" alt="chores"/></Link>
          </div>
          <div className="tbh-card-item">Chores
            <Link to="/chores"><img src={Chores} width="80px" alt="bills"/></Link>
          </div>
          <div className="tbh-card-item">Groceries
            <Link to="/groceries"><img src={Groceries} width="80px" alt="groceries"/></Link>
          </div>
        </div>
        <div className="tbh-row">
          <div className="tbh-card-item"><h1>Auto</h1>
            <Link to="/auto"><img src={Auto} width="80px" alt="chores"/></Link>
          </div>
          <div className="tbh-card-item"><h1>Bills</h1>
            <Link to="/bills"><img src={Bills} width="80px" alt="bills"/></Link>
          </div>
          <div className="tbh-card-item"><h1>Pets</h1>
            <Link to="/pets"><img src={Pets} width="80px" alt="bills"/></Link>
          </div>
        </div>
        <div className="tbh-row">
          <div className="tbh-card-item"><h1>Medical</h1>
            <Link to="/medical"><img src={Medical} width="80px" alt="medical"/></Link>
          </div>
          <div className="tbh-card-item"><h1>Calendar</h1>
            <Link to="/calendar"><img src={Calendar} width="80px" alt="calendar"/></Link>
          </div>
          <div className="tbh-card-item"><h1>Fitness</h1>
            <Link to="/fitness"><img src={Fitness} width="80px" alt="fitness"/></Link>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Dashboard

