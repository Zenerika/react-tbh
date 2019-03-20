import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/Chores.css'
// import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class Chores extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      who: '', 
      chore: '',
      priority: '',
      error: '',
      priorityAccepted: false    
    }
  }

  handleChangeWho(e) {
    e.preventDefault()
    this.setState({who: e.target.value})
  }

  handleChangeChore(e) {
    e.preventDefault()
    this.setState({chore: e.target.value})
  }

  handleChangePriority(e) {
    if (e.target.value !== 'default') {
      this.setState({priority: e.target.value, priorityAccepted: true, error: ''})
    }
    else {
      this.setState({priorityAccepted: false})
    }
  }

  handleSubmitNewChore(e) {
    e.preventDefault()
    if (this.state.priorityAccepted) {
      this.props.addChore(this.state.who, this.state.chore, this.state.priority)
      this.setState({who: '', chore: ''})


    } else {
      this.setState({error: 'Please select a priority.'})
      console.log('error')
    }
  }
  
  render() {
    return (
    <div>
      <div className="columns is-centered">
        <div className="column is-half">

          <div className="box m-auto" id="box">
            <h4 className="title is-4" id="title">Assign Chores</h4>

            <form onSubmit={(e) => this.handleSubmitNewChore(e)}>
              <div className="field">
                  <div className="control has-icons-left">
                    <input className="input" 
                           type="text" 
                           placeholder="who:" 
                           onChange={(e) => this.handleChangeWho(e)}
                           value={this.state.who} />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <div className="control has-icons-left">
                    <input className="input" 
                          type="text" 
                          placeholder="what:" 
                          onChange={(e) => this.handleChangeChore(e)}
                          value={this.state.chore} />
                    <span className="icon is-small is-left">
                      <i className="fas fa-thumbtack"></i>
                    </span>
                  </div>
                  <div className="control has-icons-left">
                    <div className="select">
                      <select onChange={(e) => this.handleChangePriority(e)}>
                      <option value="default">Select Priority:</option>
                        <option value="low">Low Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="high">High Priority</option>
                      </select>
                    </div>
                    <span className="icon is-medium is-left">
                      <i className="fas fa-clock"></i>
                    </span>
                  </div>
                  {/* <DatePicker className="datePicker"
                    selected={this.state.when}
                    onChange={this.handleChange}
                  /> */}
                  <div className="control">
                    <button className="button is-primary is-fullwidth"
                            type="submit">Submit</button>
                  </div>
                  <div className={this.state.error.length > 0 ? "notification is-danger" : ''}>
                    {this.state.error}
                  </div>
              </div>
            </form>

            <div className="content">            
              <ul id="chores">
                {this.props.chores.map((item, index) => 
                <li key={index} onClick={() => 
                this.props.toggleChore(index)} 
                style={{textDecoration: item.done ? 'line-through': null}}>
                <h6 className="title is-6" id="subtitle">{item.who}</h6>
                <i style={{color: item.priority === 'low' ? 'blue' : item.priority === 'medium' ? 'yellow' : 'red'}} className="fas fa-square" id="status"></i>{item.chore}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  chores: state.choresReducer.chores
})

const mapDispatchToProps = (dispatch) => ({
  addChore: (whoText, 
             choreText,
             priorityStatus) => dispatch({type: 'ADD_CHORE', 
                                        who: whoText, 
                                        chore: choreText, 
                                        priority: priorityStatus}),

  toggleChore: (index) => dispatch({type: 'TOGGLE_CHORE', index: index }) 
})


export default connect(mapStateToProps, mapDispatchToProps)(Chores)












  // addChore: (choreText) => dispatch({type: 'ADD_CHORE', chore: choreText}),
  // addWhen: (whenText) => dispatch({type: 'ADD_WHEN', when: whenText}),

// https://reactdatepicker.com/#example-37
// https://www.npmjs.com/package/react-datepicker
