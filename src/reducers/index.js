import { v4 as uuid } from 'uuid';

import {
  ADD,
  GENERATE_ID,
  TOGGLE,
  CLEAR,
  ON_CHANGE,
  RESET_FORM
} from './../actions';

export const initialState = {
  todos: [],
  form: {
    todo: '',
    completed: false,
    id: uuid()
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      }
    case GENERATE_ID:
      return {
        ...state,
        form: {
          ...state.form,
          id: uuid()
        }
      }
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
      }
    case CLEAR:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      }
    case ON_CHANGE:
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.target.name]: action.payload.target.value
        }
      }
    case RESET_FORM:
      return {
        ...state,
        form: initialState.form
      }
     default:
      return state;
  }
}

export default reducer;