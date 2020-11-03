import React, { Component } from 'react';

// Actions
import actions from './../actions';

// Components
import Todo from "./Todo"

export default class TodoList extends Component {
  handleClearCompleted = () => {
    this.props.dispatch(actions.clearCompleted())
  }

  render() {
    return (
      <div>
        {this.props.store.todos.map(todo => (
          <Todo key={todo.id} todo={todo} dispatch={this.props.dispatch} />
        ))}
        <button onClick={this.handleClearCompleted}>Clear Completed</button>
      </div>
    )
  }
}
