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
          <label>
            Todo:
            <input
              type="text"
              name="todo"
              value={this.props.store.form.todo}
              onChange={this.handleOnChange}
            />
          </label>
          <label>
            Complete By:
            <input
              type="date"
              name="completeBy"
              value={this.props.store.form.completedBy}
              onChange={this.handleOnChange}
            />
          </label>
          <label>
            Tags:
            <label>
              <input
                type="checkbox"
                name="coding"
                checked={this.props.store.form.coding}
                onChange={this.handleOnChange}
              />
              Coding
            </label>
            <label>
              <input
                type="checkbox"
                name="housework"
                checked={this.props.store.form.housework}
                onChange={this.handleOnChange}
              />
              Housework
            </label>
            <label>
              <input
                type="checkbox"
                name="shopping"
                checked={this.props.store.form.shopping}
                onChange={this.handleOnChange}
              />
              Shopping
            </label>
          </label>
          <button>Add Todo</button>
        </form>
      </div>
    )
  }
}
