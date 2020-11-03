import React, { Component } from 'react';

// Actions
import actions from './../actions';

export default class TodoForm extends Component {
  handleOnChange = (e) => {
    this.props.dispatch(actions.onChange(e));
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(actions.addTodo(this.props.store.form));
    this.props.dispatch(actions.resetForm());
    this.props.dispatch(actions.generateID());
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            value={this.props.store.form.todo}
            onChange={this.handleOnChange}
          />
          <button>Add Todo</button>
        </form>
      </div>
    )
  }
}
