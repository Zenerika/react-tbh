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
      when: '',
      due: true,
      urgent: false,
      pastdue: false,
      done: false    
    }
  }

  handleChangeWho(e) {
    e.preventDefault()
    this.setState({who: e.target.value})
    // this.setState({who: ''})
  }

  handleChangeChore(e) {
    e.preventDefault()
    this.setState({chore: e.target.value})
    // this.setState({chore: ''})
  }

  handleChangeWhen(e) {
    e.preventDefault()
    this.setState({when: e.target.value})
    // this.setState({when: ''})
  }

  handleSubmitNewChore(e) {
    e.preventDefault()
    this.props.addWho(this.state.who)
    this.props.addChore(this.state.chore)
    this.props.addWhen(this.state.when)
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
                    <input className="input" 
                          type="text" 
                          placeholder="when:" 
                          onChange={(e) => this.handleChangeWhen(e)}
                          value={this.state.when} />
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
              </div>
            </form>

            <div className="content">
            <h5 className="title is-5" id="subtitle">Chores</h5>
            <h6 className="title is-6" id="subtitle">Zoe</h6>
              <ul id="chores">
                {this.props.chores.map((item, index) => 
                <li key={index} onClick={() => 
                this.props.toggleChore(index)} 
                style={{textDecoration: item.done ? 'line-through': null}}>
                <i className="fas fa-square" id="status"></i>{item.chore}</li>)}
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
  addWho: (whoText) => dispatch({type: 'ADD_WHO', text: whoText}),
  addChore: (choreText) => dispatch({type: 'ADD_CHORE', text: choreText}),
  addWhen: (whenText) => dispatch({type: 'ADD_WHEN', text: whenText}),
  toggleChore: (index) => dispatch({type: 'TOGGLE_CHORE', index: index }) 
})


export default connect(mapStateToProps, mapDispatchToProps)(Chores)

// https://reactdatepicker.com/#example-37
// https://www.npmjs.com/package/react-datepicker
