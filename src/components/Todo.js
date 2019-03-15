import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hide from '../styles/img/hide.png'
import Show from '../styles/img/show.png'
import Coin from '../styles/img/coin.png'
import '../styles/Todo.css'

class Todo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      todoItem: '',
      done: false,
      visible: true,
      eye: true  
    }
  }

  handleChangeTodoItem(e) {
    e.preventDefault()
    this.setState({todoItem: e.target.value})
  }

  handleSubmitNewTodo(e) {
    e.preventDefault()
    this.props.addTodo(this.state.todoItem)
    this.setState({todoItem: ''})
  }

  handleVisibility() {
    this.setState({visible: !this.state.visible, eye: !this.state.eye})
  }


  render() {
    return (
    <div>
      <div className="columns is-centered">
        <div className="column is-half">

          <div className="box m-auto" id="box">
            <h4 className="title is-4" id="title">To-Do List</h4>

            <form onSubmit={(e) => this.handleSubmitNewTodo(e)}>
              <div className="field has-addons">
                <div className="control" id="controlBox">
                  <input className="input" 
                         type="text" 
                         placeholder="What's next?" 
                         onChange={(e) => this.handleChangeTodoItem(e)}
                         value={this.state.todoItem} />
                </div>
                <div className="control">
                  <button className="button is-primary" 
                          type="submit">Add</button>
                </div>
                <img src={this.state.eye ? Hide : Show} alt="show/hide" width="20px" id="eyeIcon"
                     onClick={(e) => this.handleVisibility(e)}/>
              </div>
            </form>

            <div className="content">
              <ul>
                {this.props.todos.map((item, index) => 
                <li key={index} onClick={() => 
                  this.props.toggleTodo(index)} 
                  style={{textDecoration: item.done ? 'line-through': null, display: !this.state.visible && item.done ? 'none' : 'block'}}>
                  {item.task}<img src={Coin} alt="coin" id="coin"/>
                </li>)}
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
  todos: state.todoReducer.todos
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todoText) => dispatch({type: 'ADD_TODO', text: todoText}),
  toggleTodo: (index) => dispatch({type: 'TOGGLE_TODO', index: index}),
})


export default connect(mapStateToProps, mapDispatchToProps)(Todo)
