import React, { Component } from 'react';
import moment from 'moment';

// Actions
import actions from './../actions';

// CSS
import './Todo.css';

export default class Todo extends Component {
  handleToggle = () => {
    this.props.dispatch(actions.toggleTodo(this.props.todo.id));
  }

  render() {
    return (
      <div className="todo">
        <div onClick={this.handleToggle} className={this.props.todo.completed ? 'completed' : ''}>
          {this.props.todo.todo}
        </div>
        <label>
          Complete By:
          <div>{moment(this.props.todo.completeBy).format('LLL')}</div>
        </label>
        {this.props.todo.timeCompleted && 
        <label>
          Time of Completion:
          <div>{this.props.todo.timeCompleted}</div>   
        </label>}
        {!this.props.todo.completed && new Date().getTime() > new Date(this.props.todo.completeBy).getTime() && <div>Overdue</div>}
      </div>
    )
  }
}
