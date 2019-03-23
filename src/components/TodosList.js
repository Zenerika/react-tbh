import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
  <tr>
    <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
    <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
    <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
    <td>
      <Link to={"/edit/"+props.todo._id}>Edit</Link>
    </td>
  </tr>
)


class TodosList extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {todos: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/todos/')
         .then(response => {
            this.setState({todos: response.data});
         })
         .catch(function(error) {
           console.log(error);
         })
  }

  componentDidUpdate() {
    axios.get('http://localhost:4000/todos/')
    .then(response => {
       this.setState({todos: response.data});
    })
    .catch(function(error) {
      console.log(error);
    }) 
  }

  TodoList() {
    return this.state.todos.map(function(currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }
  
  render() {
    return (
      <div>
        <table className="table table-dark" style={{ marginTop: 20}}>
          <thead>
            <tr>
              <th style={{color: 'white' }}>Who</th>
              <th style={{color: 'white' }}>What</th>
              <th style={{color: 'white' }}>Priority</th>
              <th style={{color: 'white' }}>Actions</th>
            </tr>
          </thead>
          <tbody style={{color: 'white' }}>
            { this.TodoList() }
          </tbody>
        </table>
      </div>
    )
  }
}

export default TodosList
