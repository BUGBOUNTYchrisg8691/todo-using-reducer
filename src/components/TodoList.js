import React, { Component } from 'react'

// Components
import Todo from "./Todo"

export default class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.store.todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </div>
    )
  }
}
