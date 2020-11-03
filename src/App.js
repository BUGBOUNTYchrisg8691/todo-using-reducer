import React, { Component, useReducer } from 'react'

// Reducer
import reducer, { initialState } from './reducers'

// Components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

// HOC for using hooks in class
function UseReducerHOC({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return children({ state, dispatch })
}

export default class App extends Component {

  render() {
    return (
      <div>
        <UseReducerHOC>
          {({ state, dispatch }) => (
            <>
              <TodoList store={state} dispatch={dispatch} />
              <TodoForm store={state} dispatch={dispatch} />
            </>
          )}
        </UseReducerHOC>
      </div>
    )
  }
}
