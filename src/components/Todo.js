import React, { Component } from 'react';

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
      <div onClick={this.handleToggle} className={this.props.todo.completed ? 'completed' : ''}>
        {this.props.todo.todo}
      </div>
    )
  }
}
