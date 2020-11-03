import React, { Component, useReducer } from 'react'

// Actions
import {
  addTodo,
  toggleTodo,
  clearCompleted,
  onChange,
  resetForm
} from "./actions"

// Reducer
import reducer, { initialState } from './reducers'

// Components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

// HOC for using hooks in class
function HigherOrderComponent({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return children({ state, dispatch })
}

export default class App extends Component {

  render() {
    return (
      <div>
        <HigherOrderComponent>
          {({ state, dispatch }) => (
            <>
              <TodoList store={state} dispatch={dispatch} />
              <TodoForm store={state} dispatch={dispatch} />
            </>
          )}
        </HigherOrderComponent>
      </div>
    )
  }
}
